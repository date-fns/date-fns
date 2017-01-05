const fs = require('fs')
const docs = require('../dist/date_fns_docs.json')

const lowerCaseTypes = ['String', 'Number', 'Boolean']

function camelCaseToSnakeCase (string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z])([a-z])/g, '$1_$2$3').toLowerCase()
}

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

function getTypeScriptModuleDefinition (name, moduleSuffix = '') {
  return [`declare module 'date-fns/${camelCaseToSnakeCase(name)}${moduleSuffix}' {`]
    .concat(`  import {${name}} from 'date-fns'`)
    .concat(`  export = ${name}`)
    .concat('}')
    .join('\n')
}

function getTypeScriptFnDefinition (fn) {
  const name = fn.content.name

  const params = getParams(fn.content.params, {indent: 1, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  const fnDefinition = [`  function ${name} ${params}: ${returns}`]
    .concat(`  namespace ${name} {}`)
    .join('\n')

  const moduleDefinition = getTypeScriptModuleDefinition(name)
  const moduleIndexDefinition = getTypeScriptModuleDefinition(name, '/index')

  return {
    fnDefinition,
    moduleDefinition,
    moduleIndexDefinition
  }
}

function generateFlowFnTyping (fn) {
  const filename = `./src/${camelCaseToSnakeCase(fn.content.name)}/index.js.flow`

  const params = getParams(fn.content.params, {indent: 0, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  const typingString = ['// @flow']
    .concat('')
    .concat(`declare module.exports: ${params} => ${returns}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateTypeScriptTypings () {
  const fns = Object.keys(docs)
    .filter(key => key.endsWith(' Helpers'))
    .map(category => docs[category])
    .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
    .sort((a, b) => a.content.name.localeCompare(b.content.name))
    .map(getTypeScriptFnDefinition)

  const definitionString = ['declare module \'date-fns\' {']
    .concat(`${fns.map(fn => fn.fnDefinition).join('\n\n')}`)
    .concat('}')
    .concat('')
    .concat(`${fns.map(fn => fn.moduleDefinition).join('\n\n')}`)
    .concat('')
    .concat(`${fns.map(fn => fn.moduleIndexDefinition).join('\n\n')}`)
    .concat('')
    .join('\n')

  fs.writeFileSync('./typings.d.ts', definitionString)
}

function generateFlowTypings () {
  Object.keys(docs)
    .filter(key => key.endsWith(' Helpers'))
    .map(category => docs[category])
    .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
    .forEach(generateFlowFnTyping)
}

generateTypeScriptTypings()
generateFlowTypings()
