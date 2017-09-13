#!/usr/bin/env node

/**
 * @file
 * The script generates docs.json used as the source of truth
 * for the source code generators (FP, typings, etc.).
 *
 * It's a part of the build process.
 */

const fsp = require('fs-promise')
const path = require('path')
const cloneDeep = require('lodash.clonedeep')
const jsDocParser = require('jsdoc-to-markdown')
const listFns = require('../_lib/listFns')
const docsConfig = require('../../docs/index.js')

const docsPath = path.resolve(process.cwd(), 'tmp/docs.json')

generateDocsFromSource()
  .then(generatedDocsObj)
  .then(injectStaticDocsToDocsObj)
  .then(injectSharedDocsToDocsObj)
  .then(writeDocsFile)
  .catch(reportErrors)

/**
 * Generates docs object from a list of functions using extended JSDoc format.
 */
function generateDocsFromSource () {
  const docs = listFns()
    .map((fn) => jsDocParser.getTemplateDataSync({
      files: fn.fullPath,
      'no-cache': true
    })[0])
    .map((doc) => ({
      type: 'jsdoc',
      kind: 'function',
      urlId: doc.name,
      category: doc.category,
      title: doc.name,
      description: doc.summary,
      content: doc
    }))
    .reduce((array, doc) => array
      .concat(generateFnDoc(doc))
      .concat(generateFPFnDoc(doc))
      .concat(generateFPFnWithOptionsDoc(doc)),
    [])

  return Promise.resolve(docs)
}

/**
 * Generates docs object.
 */
function generatedDocsObj (docs) {
  return groupDocs(docs, docsConfig.groups)
}

/**
 * Injects static docs (markdown documents specified in the config file)
 * to docs object.
 */
function injectStaticDocsToDocsObj (docsFileObj) {
  return getListOfStaticDocs()
    .then((staticDocs) => {
      staticDocs.forEach((staticDoc) => {
        docsFileObj[staticDoc.category].push(staticDoc)
      })
      return docsFileObj
    })
    .catch(reportErrors)
}

/**
 * Injects shared docs to docs object.
 */
function injectSharedDocsToDocsObj (docsFileObj) {
  return generateSharedDocs()
    .then((sharedDocs) => {
      sharedDocs.forEach((sharedDoc) => {
        docsFileObj[sharedDoc.category].push(sharedDoc)
      })
      return docsFileObj
    })
    .catch(reportErrors)
}

/**
 * Prints an error and exits the process with 1 status code.
 */
function reportErrors (err) {
  console.error(err.stack)
  process.exit(1)
}

/**
 * Writes docs file.
 */
function writeDocsFile (docsFileObj) {
  return fsp.writeFile(docsPath, JSON.stringify(docsFileObj))
}

/**
 * Groups passed docs list.
 */
function groupDocs (docs, groups) {
  return docs.reduce((acc, doc) => {
    (acc[doc.category] = acc[doc.category] || []).push(doc)
    return acc
  }, buildGroupsTemplate(groups))
}

/**
 * Builds an object where the key is a group name and the value is
 * an empty array. Pre-generated docs object allows to preserve the desired
 * groups order.
 */
function buildGroupsTemplate (groups) {
  return groups.reduce((acc, group) => {
    acc[group] = []
    return acc
  }, {})
}

/**
 * Returns promise to list of static docs with its contents.
 */
function getListOfStaticDocs (staticDocs) {
  return Promise.all(docsConfig.staticDocs.map((staticDoc) => {
    return fsp.readFile(staticDoc.path)
      .then((docContent) => docContent.toString())
      .then((content) => Object.assign({content}, staticDoc))
      .catch(reportErrors)
  }))
}

/**
 * Returns promise to list of shared docs with its contents.
 */
function generateSharedDocs (sharedDocs) {
  const docs = docsConfig.sharedDocs
    .map((fn) => jsDocParser.getTemplateDataSync({
      files: fn.fullPath,
      'no-cache': true
    })[0])
    .map((doc) => ({
      type: 'jsdoc',
      kind: 'typedef',
      urlId: doc.name,
      category: doc.category,
      title: doc.name,
      description: doc.summary,
      content: doc,
      properties: paramsToTree(doc.properties)
    }))

  return Promise.resolve(docs)
}

function generateFnDoc (dirtyDoc) {
  const doc = cloneDeep(dirtyDoc)

  const isFPFn = false
  const {urlId, title} = doc
  const args = paramsToTree(doc.content.params)

  return Object.assign(doc, {
    isFPFn,
    args,
    relatedDocs: {
      default: urlId,
      fp: `fp/${urlId}`,
      fpWithOptions: `fp/${urlId}WithOptions`
    },
    usage: generateUsage(title, isFPFn),
    usageTabs: generateUsageTabs(isFPFn),
    syntax: generateSyntaxString(title, args, isFPFn)
  })
}

function generateFPFnDoc (dirtyDoc) {
  const doc = cloneDeep(dirtyDoc)

  const isFPFn = true
  const {urlId, title} = doc
  const exceptions = doc.content.exceptions.filter(exception => !exception.description.includes('options.'))
  const params = doc.content.params
    .filter((param) =>
      !param.name.startsWith('options')
    )
    .reverse()
  const args = paramsToTree(params)

  return Object.assign(doc, {
    isFPFn,
    args,
    generatedFrom: title,
    urlId: `fp/${urlId}`,
    relatedDocs: {
      default: urlId,
      fp: `fp/${urlId}`,
      fpWithOptions: `fp/${urlId}WithOptions`
    },
    usage: generateUsage(title, isFPFn),
    usageTabs: generateUsageTabs(isFPFn),
    syntax: generateSyntaxString(title, args, isFPFn),

    content: Object.assign(doc.content, {
      exceptions,
      params,
      examples: 'See [FP Guide](https://date-fns.org/docs/FP-Guide) for more information'
    })
  })
}

function generateFPFnWithOptionsDoc (dirtyDoc) {
  const doc = cloneDeep(dirtyDoc)

  const isFPFn = true
  const {urlId, title} = doc
  const params = doc.content.params
    .map((param) => {
      if (!param.name.includes('.')) {
        param.optional = false
      }
      return param
    })
    .reverse()
  const args = paramsToTree(params)

  return Object.assign(doc, {
    isFPFn,
    args,
    generatedFrom: title,
    title: `${title}WithOptions`,
    urlId: `fp/${urlId}WithOptions`,
    relatedDocs: {
      default: urlId,
      fp: `fp/${urlId}`,
      fpWithOptions: `fp/${urlId}WithOptions`
    },
    usage: generateUsage(title, isFPFn),
    usageTabs: generateUsageTabs(isFPFn),
    syntax: generateSyntaxString(title, args, isFPFn),

    content: Object.assign(doc.content, {
      params,
      id: `${doc.content.id}WithOptions`,
      longname: `${doc.content.longname}WithOptions`,
      name: `${doc.content.name}WithOptions`,
      examples: 'See [FP Guide](https://date-fns.org/docs/FP-Guide) for more information'
    })
  })
}

function generateUsageTabs (isFPFn) {
  return isFPFn ? ['commonjs', 'es2015', 'esm'] : ['commonjs', 'umd', 'es2015', 'esm']
}

function generateUsage (name, isFPFn) {
  const submodule = isFPFn ? '/fp' : ''

  let usage = {
    commonjs: {
      title: 'CommonJS',
      code: `var ${name} = require('date-fns${submodule}/${name}')`
    },

    es2015: {
      title: 'ES 2015',
      code: `import ${name} from 'date-fns${submodule}/${name}'`
    },

    esm: {
      title: 'ESM',
      code: `import { ${name} } from 'date-fns${submodule && `/esm/${submodule}`}'`,
      text: 'See [ECMAScript Modules guide](https://date-fns.org/docs/ECMAScript-Modules) for more information'
    }
  }

  return usage
}

function paramsToTree (dirtyParams) {
  if (!dirtyParams) {
    return null
  }

  const params = cloneDeep(dirtyParams)

  const paramIndices = params
    .reduce((result, {name}, index) => {
      result[name] = index
      return result
    }, {})

  return params
    .map((param, index) => {
      const {name, isProperty} = param

      const indexOfDot = name.indexOf('.')

      if (indexOfDot >= 0 && !isProperty) {
        const parentIndex = paramIndices[name.substring(0, indexOfDot)]
        const parent = params[parentIndex]

        param.name = name.substring(indexOfDot + 1)
        param.isProperty = true
        if (!parent.props) {
          parent.props = [param]
        } else {
          parent.props.push(param)
        }
      }

      return param
    })
    .filter((param) => !param.isProperty)
}

function generateSyntaxString (name, args, isFPFn) {
  if (isFPFn) {
    return args.reduce((acc, arg) => acc.concat(`(${arg.name})`), name)
  } else {
    const argsString = args
      .map(arg => arg.optional ? `[${arg.name}]` : arg.name)
      .join(', ')
    return `${name}(${argsString})`
  }
}
