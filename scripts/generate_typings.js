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

generateTypeScriptTypings(fns)
generateTypeScriptLocaleTypings(locales)
generateFlowTypings(fns)

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

function getTypeScriptFnDefinition (fn) {
  const name = fn.content.name

  const params = getParams(fn.content.params, {indent: 1, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  return [`  function ${name} ${params}: ${returns}`]
    .concat(`  namespace ${name} {}`)
    .join('\n')
}

function generateTypeScriptFnTyping (fn) {
  const name = fn.content.name
  const snakeCaseName = fn.file.snakeCaseName
  const filename = `./src/${snakeCaseName}/index.d.ts`
  const moduleName = `date-fns/${snakeCaseName}`

  const typingString = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}} from 'date-fns'`)
    .concat(`  export = ${name}`)
    .concat('}\n')
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateTypeScriptTypings (fns) {
  const moduleDefinitions = [getTypeScriptDateFnsModuleDefinition(fns)]
    .map(module => module.definition)

  const typingString = moduleDefinitions
    .join('\n\n')

  fs.writeFileSync('./index.d.ts', `${typingString}\n`)

  fns.forEach(generateTypeScriptFnTyping)
}

function generateTypeScriptLocaleTyping (locale) {
  const snakeCaseName = locale.snakeCaseName
  const name = `locale/${snakeCaseName}`
  const filename = `./src/locale/${snakeCaseName}/index.d.ts`

  const typingString = `declare module 'date-fns/${name}' {}\n`

  fs.writeFileSync(filename, typingString)
}

function generateTypeScriptLocaleTypings (locales) {
  locales.forEach(generateTypeScriptLocaleTyping)
}
// Flow

function generateFlowFnTyping (fn) {
  const snakeCaseName = fn.file.snakeCaseName
  const filename = `./src/${snakeCaseName}/index.js.flow`

  const params = getParams(fn.content.params, {indent: 0, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  const typingString = ['// @flow']
    .concat('')
    .concat(`declare module.exports: ${params} => ${returns}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowTypings (fns) {
  fns.forEach(generateFlowFnTyping)
}
