import fs from 'fs'
import listLocales from './_lib/listLocales'
import jsDocs from '../dist/date_fns_docs.json'

const generatedAutomaticallyMessage = '// This file is generated automatically by `scripts/buildTypings.js`. Please, don\'t change it.'

const lowerCaseTypes = ['String', 'Number', 'Boolean']

const typeScriptFPInterfaces = []
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

const flowFPAliases = []
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

const locales = listLocales()

const fns = Object.keys(jsDocs)
  .map(category => jsDocs[category])
  .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
  .filter(doc => doc.kind === 'function')
  .sort((a, b) => a.title.localeCompare(b.title))

const aliases = jsDocs['Types']

generateTypeScriptTypings(fns, aliases, locales)
generateFlowTypings(fns, aliases, locales)

// Common

function correctTypeCase (type) {
  if (lowerCaseTypes.includes(type)) {
    return type.toLowerCase()
  }
  return type
}

function getParams (params, {indent = 1, leftBorder = '{', rightBorder = '}'} = {}) {
  if (params.length === 0) {
    return leftBorder + rightBorder
  }

  const paramIndent = '  '.repeat(indent + 1)
  const borderIndent = '  '.repeat(indent)

  return [leftBorder]
    .concat(params
      .map(param => {
        const {name, props, optional, variable, type: {names: typeNames}} = param
        const type = getType(typeNames, {props, indent, forceArray: variable})
        return `${paramIndent}${variable ? '...' : ''}${name}${optional ? '?' : ''}: ${type}`
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

function getFPFnType (params, returns) {
  const fpParams = params
    .map(param => param.type.names)

  const arity = fpParams.length

  fpParams.push(returns)

  return `CurriedFn${arity}<${fpParams.map(getType).join(', ')}>`
}

// TypeScript

function getTypeScriptTypeAlias (type) {
  const {title, properties} = type
  return `type ${title} = ${getParams(properties, {indent: 0})}`
}

function getTypeScriptDateFnsModuleDefinition (submodule, fns) {
  const moduleName = `date-fns${submodule}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(fns.map(getTypeScriptFnDefinition).join('\n\n'))
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptDateFnsFPModuleDefinition (submodule, fns) {
  const moduleName = `date-fns${submodule}/fp`

  const fnDefinitions = fns.map(getTypeScriptFPFnDefinition).join('\n\n')

  const definition = [`declare module '${moduleName}' {`]
    .concat(fnDefinitions)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptFnModuleDefinition (submodule, fnSuffix, isDefault, fn) {
  const name = fn.content.name
  const moduleName = `date-fns${submodule}/${name}${fnSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}} from 'date-fns${submodule}'`)
    .concat(`  export ${isDefault ? 'default' : '='} ${name}`)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptFnDefinition (fn) {
  const {title, args, content} = fn

  const params = getParams(args, {indent: 1, leftBorder: '(', rightBorder: ')'})
  const returns = getType(content.returns[0].type.names)

  return [`  function ${title} ${params}: ${returns}`]
    .concat(`  namespace ${title} {}`)
    .join('\n')
}

function getTypeScriptFPFnDefinition (fn) {
  const {title, args, content} = fn

  const type = getFPFnType(args, content.returns[0].type.names)

  return [`  let ${title}: ${type}`]
    .concat(`  namespace ${title} {}`)
    .join('\n')
}

function getTypeScriptFPFnModuleDefinition (submodule, fnSuffix, isDefault, fn) {
  const {title} = fn
  const moduleName = `date-fns${submodule}/fp/${title}${fnSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${title}} from 'date-fns${submodule}/fp'`)
    .concat(`  export ${isDefault ? 'default' : '='} ${title}`)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptLocaleModuleDefinition (submodule, localeSuffix, isDefault, locale) {
  const code = locale.code
  const name = `date-fns${submodule}/locale/${code}${localeSuffix}`

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
  const {title, args, content} = fn
  const params = getParams(args, {indent: 1, leftBorder: '(', rightBorder: ')'})
  const returns = getType(content.returns[0].type.names)

  return `${title}${params}: ${returns}`
}

function generateTypeScriptTypings (fns, aliases, locales) {
  const nonFPFns = fns.filter(fn => !fn.isFPFn)
  const fpFns = fns.filter(fn => fn.isFPFn)

  const moduleDefinitions = [getTypeScriptDateFnsModuleDefinition('', nonFPFns)]
    .concat(nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '', '', false)))
    .concat(nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '', '/index', false)))
    .concat(nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '', '/index.js', false)))
    .map(module => module.definition)

  const fpModuleDefinitions = [getTypeScriptDateFnsFPModuleDefinition('', fpFns)]
    .concat(fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '', '', false)))
    .concat(fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '', '/index', false)))
    .concat(fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '', '/index.js', false)))
    .map(module => module.definition)

  const esmModuleDefinitions = [getTypeScriptDateFnsModuleDefinition('/esm', nonFPFns)]
    .concat(nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', '', true)))
    .concat(nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', '/index', true)))
    .concat(nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', '/index.js', true)))
    .map(module => module.definition)

  const esmFPModuleDefinitions = [getTypeScriptDateFnsFPModuleDefinition('/esm', fpFns)]
    .concat(fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '/esm', '', true)))
    .concat(fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '/esm', '/index', true)))
    .concat(fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '/esm', '/index.js', true)))
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
    .concat(nonFPFns.map(fn => `  ${getTypeScriptInterfaceDefinition(fn)}`).join('\n\n'))
    .concat('}')
    .join('\n')

  const typingString = [generatedAutomaticallyMessage]
    .concat('// FP Interfaces')
    .concat(typeScriptFPInterfaces)
    .concat('// Type Aliases')
    .concat(aliasDefinitions)
    .concat('// Regular Functions')
    .concat(moduleDefinitions)
    .concat('// FP Functions')
    .concat(fpModuleDefinitions)
    .concat('// ECMAScript Module Functions')
    .concat(esmModuleDefinitions)
    .concat('// ECMAScript Module FP Functions')
    .concat(esmFPModuleDefinitions)
    .concat('// Locales')
    .concat(localeModuleDefinitions)
    .concat('// dateFns global interface definition')
    .concat(interfaceDefinitions)
    .join('\n\n')

  fs.writeFileSync('./typings.d.ts', `${typingString}\n`)
}

// Flow

function getFlowTypeAlias (type) {
  const {title, properties} = type
  return `type ${title} = ${getParams(properties, {indent: 0})}`
}

function generateFlowFnTyping (fn, aliasDeclarations) {
  const {title, args, content} = fn
  const filename = `./src/${title}/index.js.flow`

  const params = getParams(args, {indent: 0, leftBorder: '(', rightBorder: ')'})
  const returns = getType(content.returns[0].type.names)

  const moduleDeclaration = `declare module.exports: ${params} => ${returns}\n`

  const typingString = ['// @flow']
    .concat(generatedAutomaticallyMessage)
    .concat('')
    .concat(aliasDeclarations.concat(moduleDeclaration).join('\n\n'))
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowFPFnTyping (fn, aliasDeclarations) {
  const {title, args, content} = fn
  const filename = `./src/fp/${title}/index.js.flow`

  const type = getFPFnType(args, content.returns[0].type.names)

  const typingString = ['// @flow']
    .concat(generatedAutomaticallyMessage)
    .concat('')
    .concat(aliasDeclarations.join('\n\n'))
    .concat('')
    .concat(flowFPAliases)
    .concat('')
    .concat(`declare module.exports: ${type}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowLocaleTyping (locale, localeAliasDeclaration) {
  const {path} = locale
  const filename = `${path.replace(/^\./, './src')}/index.js.flow`

  const typingString = ['// @flow']
    .concat(generatedAutomaticallyMessage)
    .concat('')
    .concat(localeAliasDeclaration)
    .concat('')
    .concat(`declare module.exports: Locale\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowTypings (fns, aliases, locales) {
  const aliasDeclarations = aliases.map(getFlowTypeAlias)
  const localeAliasDeclaration = getFlowTypeAlias(aliases.find((alias) => alias.title === 'Locale'))

  fns.forEach((fn) => {
    if (fn.isFPFn) {
      generateFlowFPFnTyping(fn, aliasDeclarations)
    } else {
      generateFlowFnTyping(fn, aliasDeclarations)
    }
  })

  locales.forEach((locale) => {
    generateFlowLocaleTyping(locale, localeAliasDeclaration)
  })
}
