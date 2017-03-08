#!/usr/bin/env babel-node

import fsp from 'fs-promise'
import path from 'path'
import jsDocParser from 'jsdoc-to-markdown'
import listFiles from './_lib/listFiles'
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
  const docs = listFiles()
    .map((fn) => jsDocParser.getTemplateDataSync({
      files: fn.fullPath,
      'no-cache': true
    })[0])
    .map((doc) => ({
      type: 'jsdoc',
      urlId: doc.name,
      category: doc.category,
      title: doc.name,
      description: doc.summary,
      content: doc
    }))

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
    .then((staticDocs) => {
      staticDocs.forEach((staticDoc) => {
        docsFileObj[staticDoc.category].push(staticDoc)
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
  const jsonPath = path.join(process.cwd(), 'dist', 'date_fns_docs.json')
  return fsp.writeFile(jsonPath, JSON.stringify(docsFileObj))
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
      urlId: doc.name,
      category: doc.category,
      title: doc.name,
      description: doc.summary,
      content: doc
    }))

  return Promise.resolve(docs)
}
