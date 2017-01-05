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

function getObjectParam (param) {
  const name = param.name.split('.')[1]
  if (param.optional) {
    return `${name}?`
  }
  return name
}

function getTypescriptTypes (types, objectParams = [], forceArray) {
  const typeStrings = types.map(type => {
    if (type === '*') {
      return 'any'
    }

    if (type.startsWith('Array.')) {
      const [, arrayType] = type.match(/^Array\.<(\w+)>$/i)
      return `${correctTypeCase(arrayType)}[]`
    }

    if (objectParams.length > 0) {
      return `{${objectParams.map(param => `${getObjectParam(param)}: ${getTypescriptTypes(param.type.names)}`).join(', ')}}`
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

function getModuleDefinition (name, moduleSuffix = '') {
  return `
declare module 'date-fns/${camelCaseToSnakeCase(name)}${moduleSuffix}' {
  import {${name}} from 'date-fns'
  export = ${name}
}`
}

function getTypescriptDefinition (fn) {
  const name = fn.content.name

  const objectParams = fn.content.params.filter(param => param.name.includes('.'))

  const params = fn.content.params.filter(param => !param.name.includes('.')).map(param => {
    const name = param.name
    const types = getTypescriptTypes(param.type.names, objectParams.filter(param => param.name.startsWith(name)), param.variable)
    return `${param.variable ? '...' : ''}${name}${param.optional ? '?' : ''}: ${types}`
  }).join(',\n    ')
  const returns = getTypescriptTypes(fn.content.returns[0].type.names)

  const fnDefinition = `
  function ${name}(
    ${params}
  ): ${returns}
  namespace ${name} {}`

  const moduleDefinition = getModuleDefinition(name)
  const moduleIndexDefinition = getModuleDefinition(name, '/index')

  return {
    fnDefinition,
    moduleDefinition,
    moduleIndexDefinition
  }
}

const fns = Object.keys(docs)
  .filter(key => key.endsWith(' Helpers'))
  .map(category => docs[category])
  .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
  .sort((a, b) => a.content.name.localeCompare(b.content.name))
  .map(getTypescriptDefinition)

const definitionString = `declare module 'date-fns' {
  ${fns.map(fn => fn.fnDefinition).join('\n')}
}
${fns.map(fn => fn.moduleDefinition).join('\n')}
${fns.map(fn => fn.moduleIndexDefinition).join('\n')}
`

fs.writeFileSync('./typings.d.ts', definitionString)
