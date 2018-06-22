const fs = require('fs')

const {
  getParams,
  getType,
  getFPFnType
} = require('./common')

const {
  addSeparator,
  formatBlock,
  formatTypeScriptFile
} = require('./formatBlock')

/**
 * Return curried function interfaces for a specific FP function arity.
 * @param {Number} [arity=4]
 * @returns {String[arity]} an array of code blocks
 */
const getTypeScriptFPInterfaces = (arity = 4) => [
  formatBlock`
    interface CurriedFn1<A, R> {
      <A>(a: A): R
    }
  `,

  formatBlock`
    interface CurriedFn2<A, B, R> {
      <A>(a: A): CurriedFn1<B, R>
      <A, B>(a: A, b: B): R
    }
  `,

  formatBlock`
    interface CurriedFn3<A, B, C, R> {
      <A>(a: A): CurriedFn2<B, C, R>
      <A,B>(a: A, b: B): CurriedFn1<C, R>
      <A,B,C>(a: A, b: B, c: C): R
    }
  `,

  formatBlock`
    interface CurriedFn4<A, B, C, D, R> {
      <A>(a: A): CurriedFn3<B, C, D, R>
      <A,B>(a: A, b: B): CurriedFn2<C, D, R>
      <A,B,C>(a: A, b: B, c: C): CurriedFn1<D, R>
      <A,B,C,D>(a: A, b: B, c: C, d: D): R
    }
  `
].slice(0, arity)

function getTypeScriptTypeAlias (type) {
  const {title, properties} = type

  return formatBlock`
    type ${title} = ${getParams(properties)}
  `
}

function getTypeScriptDateFnsModuleDefinition (submodule, fns) {
  const moduleName = `date-fns${submodule}`

  const definition = formatBlock`
    declare module '${moduleName}' {
      ${addSeparator(fns.map(getTypeScriptFnDefinition), '\n')}
    }
  `

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptDateFnsFPModuleDefinition (submodule, fns) {
  const moduleName = `date-fns${submodule}/fp`

  const fnDefinitions = fns.map(getTypeScriptFPFnDefinition)

  const definition = formatBlock`
    declare module '${moduleName}' {
      ${addSeparator(fnDefinitions, '\n')}
    }
  `

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptFnModuleDefinition (submodule, fnSuffix, isDefault, fn) {
  const name = fn.content.name
  const moduleName = `date-fns${submodule}/${name}${fnSuffix}`

  const definition = formatBlock`
    declare module '${moduleName}' {
      import {${name}} from 'date-fns${submodule}'
      export ${isDefault ? 'default' : '='} ${name}
    }
  `

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptFnDefinition (fn) {
  const {title, args, content} = fn

  const params = getParams(args, {leftBorder: '(', rightBorder: ')'})
  const returns = getType(content.returns[0].type.names)

  return formatBlock`
    function ${title} ${params}: ${returns}
    namespace ${title} {}
  `
}

function getTypeScriptFPFnDefinition (fn) {
  const {title, args, content} = fn

  const type = getFPFnType(args, content.returns[0].type.names)

  return formatBlock`
    const ${title}: ${type}
    namespace ${title} {}
  `
}

function getTypeScriptFPFnModuleDefinition (submodule, fnSuffix, isDefault, fn) {
  const {title} = fn
  const moduleName = `date-fns${submodule}/fp/${title}${fnSuffix}`

  const definition = formatBlock`
    declare module '${moduleName}' {
      import {${title}} from 'date-fns${submodule}/fp'
      export ${isDefault ? 'default' : '='} ${title}
    }
  `

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptLocaleIndexModuleDefinition (submodule, locales) {
  const moduleName = `date-fns${submodule}/locale`

  const localesDefinitions = locales.map(getTypeScriptLocaleDefinition)

  const definition = formatBlock`
    declare module '${moduleName}' {
      ${addSeparator(localesDefinitions, '\n')}
    }
  `

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptLocaleDefinition (locale) {
  const {name} = locale

  return formatBlock`
    const ${name}: Locale
    namespace ${name} {}
  `
}

function getTypeScriptLocaleModuleDefinition (submodule, localeSuffix, isDefault, locale) {
  const code = locale.code
  const moduleName = `date-fns${submodule}/locale/${code}${localeSuffix}`
  const {name} = locale

  const definition = formatBlock`
    declare module '${moduleName}' {
      import {${name}} from 'date-fns${submodule}/locale'
      export ${isDefault ? 'default' : '='} ${name}
    }
  `

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptInterfaceDefinition (fn) {
  const {title, args, content} = fn
  const params = getParams(args, {leftBorder: '(', rightBorder: ')'})
  const returns = getType(content.returns[0].type.names)

  return `${title}${params}: ${returns}`
}

function generateTypescriptFnTyping (fn, aliasDeclarations) {
  const typingFile = formatTypeScriptFile`
    import {${fn.title}} from 'date-fns'
    export = ${fn.title}
  `
  fs.writeFileSync(`./src/${fn.title}/index.d.ts`, typingFile)
}

function generateTypescriptFPFnTyping (fn) {
  const typingFile = formatTypeScriptFile`
    import {${fn.title}} from 'date-fns/fp'
    export = ${fn.title}
  `
  fs.writeFileSync(`./src/fp/${fn.title}/index.d.ts`, typingFile)
}

function generateTypescriptLocaleTyping (locale) {
  const typingFile = formatTypeScriptFile`
    import {${locale.name}} from 'date-fns/locale'
    export = ${locale.name}
  `
  fs.writeFileSync(`./src/locale/${locale.code}/index.d.ts`, typingFile)
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

  const localeModuleDefinitions = [getTypeScriptLocaleIndexModuleDefinition('', locales)]
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '', '', false)))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '', '/index', false)))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '', '/index.js', false)))
    .map(module => module.definition)

  const esmLocaleModuleDefinitions = [getTypeScriptLocaleIndexModuleDefinition('/esm', locales)]
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/esm', '', true)))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/esm', '/index', true)))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/esm', '/index.js', true)))
    .map(module => module.definition)

  const globalInterfaceDefinition = formatBlock`
    interface dateFns {
      ${addSeparator(nonFPFns.map(getTypeScriptInterfaceDefinition), '\n')}
    }
  `

  const typingFile = formatTypeScriptFile`
    // FP Interfaces

    ${addSeparator(getTypeScriptFPInterfaces(), '\n')}

    // Type Aliases

    ${addSeparator(aliasDefinitions, '\n')}

    // Regular Functions

    ${addSeparator(moduleDefinitions, '\n')}

    // FP Functions

    ${addSeparator(fpModuleDefinitions, '\n')}

    // ECMAScript Module Functions

    ${addSeparator(esmModuleDefinitions, '\n')}

    // ECMAScript Module FP Functions

    ${addSeparator(esmFPModuleDefinitions, '\n')}

    // Regular Locales

    ${addSeparator(localeModuleDefinitions, '\n')}

    // ECMAScript Module Locales

    ${addSeparator(esmLocaleModuleDefinitions, '\n')}

    // dateFns Global Interface

    ${globalInterfaceDefinition}
  `

  fs.writeFileSync('./typings.d.ts', typingFile)

  fns.forEach((fn) => {
    if (fn.isFPFn) {
      generateTypescriptFPFnTyping(fn)
    } else {
      generateTypescriptFnTyping(fn)
    }
  })

  locales.forEach((locale) => {
    generateTypescriptLocaleTyping(locale)
  })
}

module.exports = {
  generateTypeScriptTypings
}
