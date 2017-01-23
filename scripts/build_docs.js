#!/usr/bin/env babel-node

import fsp from 'fs-promise'
import path from 'path'
import parseJSDoc from 'jsdoc-parse'
import listFiles from './_lib/list_files'
import docsConfig from '../docs'

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
  return listFiles()
    .reduce((promise, file) => {
      return promise.then((acc) =>
        generateDocFromSource(acc, file)
      )
    }, Promise.resolve([]))
    .then((jsDocs) =>
      jsDocs.map((doc) =>
        ({
          type: 'jsdoc',
          urlId: doc.name,
          category: doc.category,
          title: doc.name,
          description: doc.summary,
          content: doc
        })
      )
    )
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
}

/**
 * Injects shared docs to docs object.
 */
function injectSharedDocsToDocsObj (docsFileObj) {
  return generateSharedDocs()
    .then((staticDocs) => {
      staticDocs.forEach((staticDoc) => {
        docsFileObj[staticDoc.category].push(staticDoc)
      })
      return docsFileObj
    })
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
  const jsonPath = path.join(process.cwd(), 'dist', 'date_fns_docs.json')
  return fsp.writeFile(jsonPath, JSON.stringify(docsFileObj))
}

/**
 * Generates docs object from a function using extended JSDoc format.
 */
function generateDocFromSource (acc, fn) {
  return new Promise((resolve, reject) => {
    const stream = parseJSDoc({src: fn.fullPath})
    var data = ''

    stream.on('error', (err) => {
      console.error(err)
      process.exit(1)
    })

    stream.on('data', (chunk) => { data += chunk })
    stream.on('end', () => resolve(JSON.parse(data)))
  }).then((doc) => acc.concat(doc))
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
  }))
}

/**
 * Returns promise to list of shared docs with its contents.
 */
function generateSharedDocs (sharedDocs) {
  return docsConfig.sharedDocs
    .reduce((promise, file) => {
      return promise.then((acc) =>
        generateDocFromSource(acc, file)
      )
    }, Promise.resolve([]))
    .then((jsDocs) =>
      jsDocs.map((doc) =>
        ({
          type: 'jsdoc',
          urlId: doc.name,
          category: doc.category,
          title: doc.name,
          description: doc.summary,
          content: doc
        })
      )
    )
}
