const {
  addSeparator,
  formatBlock
} = require('./formatBlock')

const lowerCaseTypes = ['String', 'Number', 'Boolean']

function correctTypeCase (type) {
  if (lowerCaseTypes.includes(type)) {
    return type.toLowerCase()
  }
  return type
}

function getParams (params, {leftBorder = '{', rightBorder = '}'} = {}) {
  if (params.length === 0) {
    return leftBorder + rightBorder
  }

  const formattedParams = addSeparator(
    params.map(param => {
      const {name, props, optional, variable, type: {names: typeNames}} = param
      const type = getType(typeNames, {props, forceArray: variable})
      return `${variable ? '...' : ''}${name}${optional ? '?' : ''}: ${type}`
    }),
    ','
  )

  return formatBlock`
    ${leftBorder}
      ${formattedParams}
    ${rightBorder}
  `
}

function getType (types, {props = [], forceArray = false} = {}) {
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
      return getParams(props)
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

module.exports = {
  correctTypeCase,
  getParams,
  getType,
  getFPFnType
}
