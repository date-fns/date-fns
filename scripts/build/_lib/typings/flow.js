const fs = require('fs')
const path = require('path')
const prettier = require('../prettier')

const { getParams, getType, getFPFnType } = require('./common')

const { addSeparator, formatBlock, formatFlowFile } = require('./formatBlock')

/**
 * Return curried function type aliases for a specific FP function arity.
 * @param {Number} [arity=4]
 */
const getFlowFPTypeAliases = (arity = 4) =>
  [
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
    `,
  ].slice(0, arity)

function getFlowTypeAlias(type) {
  const { title, properties, content } = type
  return `export type ${title} = ${
    properties ? getParams(properties) : content.type.names.join(' | ')
  }`
}

function generateFlowFnTyping(fn, aliasDeclarations) {
  const { title, args, content } = fn

  const params = getParams(args, { leftBorder: '(', rightBorder: ')' })
  const returns = getType(content.returns[0].type.names)

  const moduleDeclaration = `declare module.exports: ${params} => ${returns}`

  const typingFile = formatFlowFile`
    ${addSeparator(aliasDeclarations, '\n')}

    ${moduleDeclaration}
  `

  writeFile(`src/${title}/index.js.flow`, typingFile)
}

function generateFlowFnIndexTyping(fns, aliasDeclarations, constants) {
  const fnsDeclarations = fns.map(({ title, args, content }) => {
    const params = getParams(args, { leftBorder: '(', rightBorder: ')' })
    const returns = getType(content.returns[0].type.names)
    return `${title}: ${params} => ${returns}`
  })

  const typingFile = formatFlowFile`
    ${addSeparator(aliasDeclarations, '\n')}

    declare module.exports: {
      ${addSeparator(
        fnsDeclarations.concat(generateConstantsDeclarations(constants)),
        ',\n'
      )}
    }
  `

  writeFile(`src/index.js.flow`, typingFile)
}

function generateFlowFPFnTyping(fn, aliasDeclarations) {
  const { title, args, content } = fn

  const type = getFPFnType(args, content.returns[0].type.names)

  const typingFile = formatFlowFile`
    ${addSeparator(aliasDeclarations, '\n')}

    ${addSeparator(getFlowFPTypeAliases(args.length), '\n')}

    declare module.exports: ${type}
  `

  writeFile(`src/fp/${title}/index.js.flow`, typingFile)
}

function generateFlowFPFnIndexTyping(fns, aliasDeclarations, constants) {
  const fnsDeclarations = fns.map(
    ({ title, args, content }) =>
      `${title}: ${getFPFnType(args, content.returns[0].type.names)}`
  )

  const typingFile = formatFlowFile`
    ${addSeparator(aliasDeclarations, '\n')}

    ${addSeparator(getFlowFPTypeAliases(), '\n')}

    declare module.exports: {
      ${addSeparator(
        fnsDeclarations.concat(generateConstantsDeclarations(constants)),
        ','
      )}
    }
  `

  writeFile(`src/fp/index.js.flow`, typingFile)
}

function generateFlowLocaleTyping(locale, localeAliasDeclaration) {
  const { fullPath } = locale

  const typingFile = formatFlowFile`
    ${localeAliasDeclaration}

    declare module.exports: Locale
  `

  writeFile(`${fullPath}.flow`, typingFile)
}

function generateFlowLocaleIndexTyping(locales, localeAliasDeclaration) {
  const typingFile = formatFlowFile`
    ${localeAliasDeclaration}

    declare module.exports: {
      ${addSeparator(
        locales.map(({ name }) => `${name}: Locale`),
        ','
      )}
    }
  `

  writeFile('src/locale/index.js.flow', typingFile)
}

function generateFlowTypings(fns, aliases, locales, constants) {
  const aliasDeclarations = aliases.map(getFlowTypeAlias)
  const localeAliasDeclaration = getFlowTypeAlias(
    aliases.find((alias) => alias.title === 'Locale')
  )

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

  generateFlowFnIndexTyping(
    fns.filter(({ isFPFn }) => !isFPFn),
    aliasDeclarations,
    constants
  )
  generateFlowFPFnIndexTyping(
    fns.filter(({ isFPFn }) => isFPFn),
    aliasDeclarations,
    constants
  )
  generateFlowLocaleIndexTyping(locales, localeAliasDeclaration)
}

function generateConstantsDeclarations(constants) {
  return constants.map((c) => `${c.name}: ${c.type.names.join(' | ')}`)
}

function writeFile(relativePath, content) {
  return fs.writeFileSync(
    path.resolve(process.cwd(), relativePath),
    prettier(content, 'flow')
  )
}

module.exports = {
  generateFlowTypings,
}
