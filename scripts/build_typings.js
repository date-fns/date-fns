import fs from 'fs'
import listFiles from './_lib/list_files'
import listLocales from './_lib/list_locales'
import jsDocs from '../dist/date_fns_docs.json'

const lowerCaseTypes = ['String', 'Number', 'Boolean']

const typeScriptFpInterfaces = []
  .concat('interface CurriedFn1<A, R> {')
  .concat('  <A>(a: A): R')
  .concat('}')
  .concat('')
  .concat('interface CurriedFn2<A, B, R> {')
  .concat('  <A>(a: A): CurriedFn1<B, R>')
  .concat('  <A, B>(a: A, b: B): R')
  .concat('}')
  .concat('')
  .concat('interface CurriedFn3<A, B, C, R> {')
  .concat('  <A>(a: A): CurriedFn2<B, C, R>')
  .concat('  <A,B>(a: A, b: B): CurriedFn1<C, R>')
  .concat('  <A,B,C>(a: A, b: B, c: C): R')
  .concat('}')
  .concat('')
  .concat('interface CurriedFn4<A, B, C, D, R> {')
  .concat('  <A>(a: A): CurriedFn3<B, C, D, R>')
  .concat('  <A,B>(a: A, b: B): CurriedFn2<C, D, R>')
  .concat('  <A,B,C>(a: A, b: B, c: C): CurriedFn1<D, R>')
  .concat('  <A,B,C,D>(a: A, b: B, c: C, d: D): R')
  .concat('}')
  .join('\n')

const flowFpAliases = []
  .concat('type CurriedFn1<A, R> = <A>(a: A) => R')
  .concat('')
  .concat('type CurriedFn2<A, B, R> = <A>(a: A) => CurriedFn1<B, R>')
  .concat('  | <A, B>(a: A, b: B) => R')
  .concat('')
  .concat('type CurriedFn3<A, B, C, R> = <A>(a: A) => CurriedFn2<B, C, R>')
  .concat('  | <A,B>(a: A, b: B) => CurriedFn1<C, R>')
  .concat('  | <A,B,C>(a: A, b: B, c: C) => R')
  .concat('')
  .concat('type CurriedFn4<A, B, C, D, R> = <A>(a: A) => CurriedFn3<B, C, D, R>')
  .concat('  | <A,B>(a: A, b: B) => CurriedFn2<C, D, R>')
  .concat('  | <A,B,C>(a: A, b: B, c: C) => CurriedFn1<D, R>')
  .concat('  | <A,B,C,D>(a: A, b: B, c: C, d: D) => R')
  .join('\n')

const files = listFiles()
const locales = listLocales()

const fns = Object.keys(jsDocs)
  .map(category => jsDocs[category])
  .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
  .map(doc => {
    const {name} = doc.content
    const file = files.find(file => file.name === name)
    doc.file = file
    return doc
  })
  .filter(doc => doc.file)
  .sort((a, b) => a.content.name.localeCompare(b.content.name))

const aliases = jsDocs['Types']

generateTypeScriptTypings(fns, aliases, locales)
generateFlowTypings(fns, aliases)

// Common

function correctTypeCase (type) {
  if (lowerCaseTypes.includes(type)) {
    return type.toLowerCase()
  }
  return type
}

function getParams (params, {indent = 1, leftBorder = '{', rightBorder = '}'} = {}) {
  if (params.length === 0) {
    return '()'
  }

  const props = params
    .filter(param => param.name.includes('.'))
    .map(param => {
      const [parent, name] = param.name.split('.')
      const {type, variable, optional} = param
      return {
        parent,
        name,
        type,
        variable,
        optional
      }
    })

  const paramIndent = '  '.repeat(indent + 1)
  const borderIndent = '  '.repeat(indent)

  return [leftBorder]
    .concat(params
      .filter(param => !param.name.includes('.'))
      .map(param => {
        const name = param.name
        const type = getType(param.type.names, {
          props: props.filter(param => param.parent === name),
          forceArray: param.variable,
          indent
        })
        return `${paramIndent}${param.variable ? '...' : ''}${name}${param.optional ? '?' : ''}: ${type}`
      })
      .join(',\n')
    )
    .concat(borderIndent + rightBorder)
    .join('\n')
}

function getType (types, {props = [], forceArray = false, indent = 1} = {}) {
  const typeStrings = types.map(type => {
    if (type === '*') {
      return 'any'
    }

    if (type === 'function') {
      return 'Function'
    }

    if (type.startsWith('Array.')) {
      const [, arrayType] = type.match(/^Array\.<(\w+)>$/i)
      return `${correctTypeCase(arrayType)}[]`
    }

    if (type === 'Object' && props.length > 0) {
      return getParams(props, {indent: indent + 1})
    }

    const caseCorrectedType = correctTypeCase(type)
    if (forceArray) {
      return `${caseCorrectedType}[]`
    }

    return caseCorrectedType
  })

  const allArrayTypes = typeStrings.length > 1 && typeStrings.every(type => type.endsWith('[]'))
  if (allArrayTypes) {
    return `(${typeStrings.map(type => type.replace('[]', '')).join(' | ')})[]`
  }

  return typeStrings.join(' | ')
}

function getFpFnType (params, returns, nameSuffix) {
  const withOptions = nameSuffix === 'WithOptions'
  const fpParams = params
    .filter(param => !param.name.includes('.'))
    .reverse()
    .filter((_, index) => withOptions || index !== 0)
    .map(param => param.type.names)

  const arity = fpParams.length

  fpParams.push(returns)

  return `CurriedFn${arity}<${fpParams.map(getType).join(', ')}>`
}

// TypeScript

function getTypeScriptTypeAlias (type) {
  const name = type.content.name
  const properties = getParams(type.content.properties, {indent: 0})

  return `type ${name} = ${properties}`
}

function getTypeScriptDateFnsModuleDefinition (moduleSuffix, fns) {
  const moduleName = `date-fns${moduleSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(fns.map(getTypeScriptFnDefinition).join('\n\n'))
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptDateFnsFpModuleDefinition (moduleSuffix, fns) {
  const moduleName = `date-fns${moduleSuffix}/fp`

  const fnDefinitions = []
    .concat(fns.map(getTypeScriptFpFnDefinition.bind(null, '')))
    .concat(fns.map(getTypeScriptFpFnDefinition.bind(null, 'WithOptions')))
    .join('\n\n')

  const definition = [`declare module '${moduleName}' {`]
    .concat(fnDefinitions)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptFnModuleDefinition (moduleSuffix, fnSuffix, isDefault, fn) {
  const name = fn.content.name
  const snakeCaseName = fn.file.snakeCaseName
  const moduleName = `date-fns${moduleSuffix}/${snakeCaseName}${fnSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}} from 'date-fns${moduleSuffix}'`)
    .concat(`  export ${isDefault ? 'default' : '='} ${name}`)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptFnDefinition (fn) {
  const name = fn.content.name

  const params = getParams(fn.content.params, {indent: 1, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  return [`  function ${name} ${params}: ${returns}`]
    .concat(`  namespace ${name} {}`)
    .join('\n')
}

function getTypeScriptFpFnDefinition (nameSuffix, fn) {
  const name = `${fn.content.name}${nameSuffix}`

  const type = getFpFnType(fn.content.params, fn.content.returns[0].type.names, nameSuffix)

  return [`  let ${name}: ${type}`]
    .concat(`  namespace ${name} {}`)
    .join('\n')
}

function getTypeScriptFpFnModuleDefinition (moduleSuffix, nameSuffix, fnSuffix, isDefault, fn) {
  const name = fn.content.name
  const moduleName = `date-fns${moduleSuffix}/fp/${name}${nameSuffix}${fnSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}} from 'date-fns${moduleSuffix}/fp'`)
    .concat(`  export ${isDefault ? 'default' : '='} ${name}`)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptLocaleModuleDefinition (moduleSuffix, localeSuffix, isDefault, locale) {
  const snakeCaseName = locale.snakeCaseName
  const name = `date-fns${moduleSuffix}/locale/${snakeCaseName}${localeSuffix}`

  const definition = [`declare module '${name}' {`]
    .concat('  const locale: Locale')
    .concat(`  export ${isDefault ? 'default' : '='} locale`)
    .concat('}')
    .join('\n')

  return {
    name,
    definition
  }
}

function getTypeScriptInterfaceDefinition (fn) {
  const name = fn.content.name
  const params = getParams(fn.content.params, {indent: 1, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  return `${name}${params}: ${returns}`
}

function generateTypeScriptTypings (fns, aliases, locales) {
  const moduleDefinitions = [getTypeScriptDateFnsModuleDefinition('', fns)]
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '', '', false)))
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '', '/index', false)))
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '', '/index.js', false)))
    .map(module => module.definition)

  const fpModuleDefinitions = [getTypeScriptDateFnsFpModuleDefinition('', fns)]
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '', '', '', false)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '', '', '/index', false)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '', '', '/index.js', false)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '', 'WithOptions', '', false)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '', 'WithOptions', '/index', false)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '', 'WithOptions', '/index.js', false)))
    .map(module => module.definition)

  const esmModuleDefinitions = [getTypeScriptDateFnsModuleDefinition('/esm', fns)]
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', '', true)))
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', '/index', true)))
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', '/index.js', true)))
    .map(module => module.definition)

  const esmFpModuleDefinitions = [getTypeScriptDateFnsFpModuleDefinition('/esm', fns)]
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/esm', '', '', true)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/esm', '', '/index', true)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/esm', '', '/index.js', true)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/esm', 'WithOptions', '', true)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/esm', 'WithOptions', '/index', true)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/esm', 'WithOptions', '/index.js', true)))
    .map(module => module.definition)

  const aliasDefinitions = aliases
    .map(getTypeScriptTypeAlias)

  const localeModuleDefinitions = []
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '', '', false)))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '', '/index', false)))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '', '/index.js', false)))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/esm', '', true)))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/esm', '/index', true)))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/esm', '/index.js', true)))
    .map(module => module.definition)

  const interfaceDefinitions = ['interface dateFns {']
    .concat(fns.map(fn => `  ${getTypeScriptInterfaceDefinition(fn)}`).join('\n\n'))
    .concat('}')
    .join('\n')

  const typingString = ['// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.']
    .concat('// FP Interfaces')
    .concat(typeScriptFpInterfaces)
    .concat('// Type Aliases')
    .concat(aliasDefinitions)
    .concat('// Regular Functions')
    .concat(moduleDefinitions)
    .concat('// FP Functions')
    .concat(fpModuleDefinitions)
    .concat('// ECMAScript Module Functions')
    .concat(esmModuleDefinitions)
    .concat('// ECMAScript Module FP Functions')
    .concat(esmFpModuleDefinitions)
    .concat('// Locales')
    .concat(localeModuleDefinitions)
    .concat('// dateFns global interface definition')
    .concat(interfaceDefinitions)
    .join('\n\n')

  fs.writeFileSync('./typings.d.ts', `${typingString}\n`)
}

// Flow

function getFlowTypeAlias (type) {
  const name = type.content.name
  const properties = getParams(type.content.properties, {indent: 0})

  return `type ${name} = ${properties}`
}

function generateFlowFnTyping (fn, aliasDeclarations) {
  const snakeCaseName = fn.file.snakeCaseName
  const filename = `./src/${snakeCaseName}/index.js.flow`

  const params = getParams(fn.content.params, {indent: 0, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  const moduleDeclaration = `declare module.exports: ${params} => ${returns}\n`

  const typingString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(aliasDeclarations.concat(moduleDeclaration).join('\n\n'))
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowFpFnTyping (fn, nameSuffix, aliasDeclarations) {
  const name = fn.content.name
  const filename = `./src/fp/${name}${nameSuffix}/index.js.flow`

  const type = getFpFnType(fn.content.params, fn.content.returns[0].type.names, nameSuffix)

  const typingString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(aliasDeclarations.join('\n\n'))
    .concat('')
    .concat(flowFpAliases)
    .concat('')
    .concat(`declare module.exports: ${type}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowTypings (fns, aliases) {
  const aliasDeclarations = aliases.map(getFlowTypeAlias)
  fns.forEach((fn) => {
    generateFlowFnTyping(fn, aliasDeclarations)
    generateFlowFpFnTyping(fn, '', aliasDeclarations)
    generateFlowFpFnTyping(fn, 'WithOptions', aliasDeclarations)
  })
}
