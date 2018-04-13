const fs = require('fs')

const {
  getParams,
  getType,
  getFPFnType
} = require('./common')

const {
  addSeparator,
  formatBlock,
  formatFlowFile
} = require('./formatBlock')

/**
 * Return curried function type aliases for a specific FP function arity.
 * @param {Number} [arity=4]
 */
const getFlowFPTypeAliases = (arity = 4) => [
  'type CurriedFn1<A, R> = <A>(a: A) => R',

  formatBlock`
    type CurriedFn2<A, B, R> = <A>(a: A) => CurriedFn1<B, R>
      | <A, B>(a: A, b: B) => R
  `,

  formatBlock`
    type CurriedFn3<A, B, C, R> = <A>(a: A) => CurriedFn2<B, C, R>
      | <A,B>(a: A, b: B) => CurriedFn1<C, R>
      | <A,B,C>(a: A, b: B, c: C) => R
  `,

  formatBlock`
    type CurriedFn4<A, B, C, D, R> = <A>(a: A) => CurriedFn3<B, C, D, R>
      | <A,B>(a: A, b: B) => CurriedFn2<C, D, R>
      | <A,B,C>(a: A, b: B, c: C) => CurriedFn1<D, R>
      | <A,B,C,D>(a: A, b: B, c: C, d: D) => R
  `
].slice(0, arity)

function getFlowTypeAlias (type) {
  const {title, properties} = type
  return `type ${title} = ${getParams(properties)}`
}

function generateFlowFnTyping (fn, aliasDeclarations) {
  const {title, args, content} = fn
  const filename = `./src/${title}/index.js.flow`

  const params = getParams(args, {leftBorder: '(', rightBorder: ')'})
  const returns = getType(content.returns[0].type.names)

  const moduleDeclaration = `declare module.exports: ${params} => ${returns}`

  const typingFile = formatFlowFile`
    ${addSeparator(aliasDeclarations, '\n')}

    ${moduleDeclaration}
  `

  fs.writeFileSync(filename, typingFile)
}

function generateFlowFnIndexTyping (fns, aliasDeclarations) {
  const filename = `./src/index.js.flow`

  const fnsDeclarations = fns.map(({title, args, content}) => {
    const params = getParams(args, {leftBorder: '(', rightBorder: ')'})
    const returns = getType(content.returns[0].type.names)
    return `${title}: ${params} => ${returns}`
  })

  const typingFile = formatFlowFile`
    ${addSeparator(aliasDeclarations, '\n')}

    declare module.exports: {
      ${addSeparator(fnsDeclarations, ',\n')}
    }
  `

  fs.writeFileSync(filename, typingFile)
}

function generateFlowFPFnTyping (fn, aliasDeclarations) {
  const {title, args, content} = fn
  const filename = `./src/fp/${title}/index.js.flow`

  const type = getFPFnType(args, content.returns[0].type.names)

  const typingFile = formatFlowFile`
    ${addSeparator(aliasDeclarations, '\n')}

    ${addSeparator(getFlowFPTypeAliases(args.length), '\n')}

    declare module.exports: ${type}
  `

  fs.writeFileSync(filename, typingFile)
}

function generateFlowFPFnIndexTyping (fns, aliasDeclarations) {
  const filename = `./src/fp/index.js.flow`

  const fnsDeclarations = fns.map(({title, args, content}) =>
    `${title}: ${getFPFnType(args, content.returns[0].type.names)}`
  )

  const typingFile = formatFlowFile`
    ${addSeparator(aliasDeclarations, '\n')}

    ${addSeparator(getFlowFPTypeAliases(), '\n')}

    declare module.exports: {
      ${addSeparator(fnsDeclarations, ',')}
    }
  `

  fs.writeFileSync(filename, typingFile)
}

function generateFlowLocaleTyping (locale, localeAliasDeclaration) {
  const {fullPath} = locale
  const filename = `${fullPath}.flow`

  const typingFile = formatFlowFile`
    ${localeAliasDeclaration}

    declare module.exports: Locale
  `

  fs.writeFileSync(filename, typingFile)
}

function generateFlowLocaleIndexTyping (locales, localeAliasDeclaration) {
  const filename = './src/locale/index.js.flow'

  const typingFile = formatFlowFile`
    ${localeAliasDeclaration}

    declare module.exports: {
      ${addSeparator(locales.map(({name}) => `${name}: Locale`), ',')}
    }
  `

  fs.writeFileSync(filename, typingFile)
}

function generateFlowTypings (fns, aliases, locales) {
  const aliasDeclarations = aliases.map(getFlowTypeAlias)
  const localeAliasDeclaration = getFlowTypeAlias(aliases.find((alias) => alias.title === 'Locale'))

  fns.forEach((fn, index) => {
    if (fn.isFPFn) {
      generateFlowFPFnTyping(fn, aliasDeclarations)
    } else {
      generateFlowFnTyping(fn, aliasDeclarations)
    }
  })

  locales.forEach((locale) => {
    generateFlowLocaleTyping(locale, localeAliasDeclaration)
  })

  generateFlowFnIndexTyping(fns.filter(({isFPFn}) => !isFPFn), aliasDeclarations)
  generateFlowFPFnIndexTyping(fns.filter(({isFPFn}) => isFPFn), aliasDeclarations)
  generateFlowLocaleIndexTyping(locales, localeAliasDeclaration)
}

module.exports = {
  generateFlowTypings
}
