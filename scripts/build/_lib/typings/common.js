const { addSeparator, formatBlock } = require('./formatBlock')

const lowerCaseTypes = ['String', 'Number', 'Boolean']

function correctTypeCase(type) {
  if (lowerCaseTypes.includes(type)) {
    return type.toLowerCase()
  }
  return type
}

function getParams(params, { leftBorder = '{', rightBorder = '}' } = {}) {
  if (!params || params.length === 0) {
    return leftBorder + rightBorder
  }

  const formattedParams = addSeparator(
    params.map((param) => {
      const {
        name,
        props,
        optional,
        variable,
        type: { names: typeNames },
      } = param
      const type = getType(typeNames, { props, forceArray: variable })
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

function getType(
  types,
  { props = [], forceArray = false, flowType = false } = {}
) {
  if (!types) {
    return 'void'
  }

  let optional = false
  if (flowType && types.some((type) => type === 'undefined')) {
    optional = true
    types = types.filter((type) => type !== 'undefined')
  }

  const typeStrings = (types || []).map((type) => {
    if (type === '*') {
      return 'any'
    }

    if (type === 'function') {
      return '(...args: Array<any>) => any'
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

  const prefix = optional ? '?' : ''

  const allArrayTypes =
    typeStrings.length > 1 && typeStrings.every((type) => type.endsWith('[]'))
  if (allArrayTypes) {
    return `(${typeStrings
      .map((type) => `${prefix}${type.replace('[]', '')}`)
      .join(' | ')})[]`
  }

  return typeStrings.map((typeString) => `${prefix}${typeString}`).join(' | ')
}

function getFPFnType(params, returns, { flowType = false } = {}) {
  if (params.length === 0) {
    return `() => ${getType(returns, { flowType })}`
  }
  const fpParamTypes = params.map((param) =>
    getType(param.type.names, { props: param.props, flowType })
  )

  const arity = fpParamTypes.length

  fpParamTypes.push(getType(returns, { flowType }))

  return `CurriedFn${arity}<${fpParamTypes.join(', ')}>`
}

module.exports = {
  correctTypeCase,
  getParams,
  getType,
  getFPFnType,
}
