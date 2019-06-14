#!/usr/bin/env babel-node

/**
 * @file
 * The script generates the locale snapshots.
 *
 * It's a part of the build process.
 */

import { readFileSync, writeFile } from 'mz/fs'
import path from 'path'
import listLocales from '../../_lib/listLocales'
import prettier from '../_lib/prettier'
import renderFormatDistance from './renderFormatDistance'
import renderFormatDistanceStrict from './renderFormatDistanceStrict'
import renderFormatParse from './renderFormatParse'
import renderFormatRelative from './renderFormatRelative'

const outdatedLocales = JSON.parse(
  readFileSync(path.join(process.cwd(), 'outdatedLocales.json'), 'utf8')
)
const locales = listLocales().filter(
  ({ code }) => !outdatedLocales.includes(code)
)

const snapshots = locales.map(localeObj => {
  const { code, fullPath } = localeObj
  const locale = require(`../../../src/locale/${code}`)
  const source = readFileSync(path.join(process.cwd(), fullPath)).toString()
  const languageName = source.match(/\* @language (.*)/)[1]

  const snapshot = `# ${languageName} (${code}) locale

${renderFormatParse(locale)}

${renderFormatDistance(locale)}

${renderFormatDistanceStrict(locale)}

${renderFormatRelative(locale)}
`

  const snapshotPath = path.join(
    path.resolve(process.cwd(), path.dirname(fullPath)),
    'snapshot.md'
  )
  return { snapshot, snapshotPath }
})

Promise.all(
  snapshots.map(({ snapshot, snapshotPath }) =>
    writeFile(snapshotPath, prettier(snapshot, 'markdown'))
  )
).catch(err => {
  console.error(err.stack)
  process.exit(1)
})
