import fs from 'fs'
import listFiles from './_lib/list_files'
import listLocales from './_lib/list_locales'
import jsDocs from '../dist/date_fns_docs.json'

const lowerCaseTypes = ['String', 'Number', 'Boolean']

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

    if (props.length > 0) {
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

function getTypeAlias (type) {
  const name = type.content.name
  const properties = getParams(type.content.properties, {indent: 0})

  return `type ${name} = ${properties}`
}

// TypeScript

function getTypeScriptDateFnsModuleDefinition (fns) {
  const definition = ['declare module \'date-fns\' {']
    .concat(fns.map(getTypeScriptFnDefinition).join('\n\n'))
    .concat('}')
    .join('\n')

  return {
    name: 'date-fns',
    definition
  }
}

function getTypeScriptFnModuleDefinition (moduleSuffix, fn) {
  const name = fn.content.name
  const snakeCaseName = fn.file.snakeCaseName
  const moduleName = `date-fns/${snakeCaseName}${moduleSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}} from 'date-fns'`)
    .concat(`  export = ${name}`)
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

function getTypeScriptLocaleModuleDefinition (moduleSuffix, locale) {
  const snakeCaseName = locale.snakeCaseName
  const name = `locale/${snakeCaseName}${moduleSuffix}`

  const definition = `declare module 'date-fns/${name}' {}`

  return {
    name,
    definition
  }
}

function generateTypeScriptTypings (fns, aliases, locales) {
  const moduleDefinitions = [getTypeScriptDateFnsModuleDefinition(fns)]
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '')))
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '/index')))
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '/index.js')))
    .map(module => module.definition)

  const aliasDefinitions = aliases
    .map(getTypeAlias)

  const localeModuleDefinitions = []
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '')))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/index')))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/index.js')))
    .map(module => module.definition)
    .join('\n')

  const typingString = ['// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.']
    .concat(aliasDefinitions)
    .concat(moduleDefinitions)
    .concat(localeModuleDefinitions)
    .join('\n\n')

  fs.writeFileSync('./typings.d.ts', `${typingString}\n`)
}

// Flow

function generateFlowTypeAlias (type) {
  const name = type.content.name
  const properties = getParams(type.content.properties, {indent: 0})
  const filename = `./flow-typed/${name}.js.flow`

  const aliasString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(`type ${name} = ${properties}\n`)
    .join('\n')

  fs.writeFileSync(filename, aliasString)
}

function generateFlowFnTyping (fn) {
  const snakeCaseName = fn.file.snakeCaseName
  const filename = `./src/${snakeCaseName}/index.js.flow`

  const params = getParams(fn.content.params, {indent: 0, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  const typingString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(`declare module.exports: ${params} => ${returns}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowTypings (fns, aliases) {
  aliases.forEach(generateFlowTypeAlias)
  fns.forEach(generateFlowFnTyping)
}
