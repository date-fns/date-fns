#!/usr/bin/env node

/**
 * @file
 * The script generates Flow and TypeScript typing files.
 *
 * It's a part of the build process.
 */

const path = require('path')
const listLocales = require('../_lib/listLocales')
const jsDocs = require(path.resolve(process.cwd(), 'tmp/docs.json'))

const { generateTypeScriptTypings } = require('./_lib/typings/typeScript')
const { generateFlowTypings } = require('./_lib/typings/flow')

const locales = listLocales()

const fns = Object.keys(jsDocs)
  .map(category => jsDocs[category])
  .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
  .filter(doc => doc.kind === 'function')
  .sort((a, b) => a.title.localeCompare(b.title, 'en-US'))

const aliases = jsDocs['Types']

generateTypeScriptTypings(fns, aliases, locales)
generateFlowTypings(fns, aliases, locales)
