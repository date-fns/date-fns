#!/usr/bin/env babel-node

/**
 * @file
 * The script generates the locale snapshots.
 *
 * It's a part of the build process.
 */

import { readFile, readFileSync, writeFile } from 'mz/fs'
import path from 'path'
import listLocales from '../../_lib/listLocales'
import prettier from '../_lib/prettier'
import renderFormatDistance from './renderFormatDistance'
import renderFormatDistanceStrict from './renderFormatDistanceStrict'
import renderFormatParse from './renderFormatParse'
import renderFormatRelative from './renderFormatRelative'

const mode = process.argv[2] || 'generate'

if (process.env.TZ.toLowerCase() !== 'utc')
  throw new Error('The locale snapshots generation must be run with TZ=utc')

const outdatedLocales = JSON.parse(
  readFileSync(path.join(process.cwd(), 'outdatedLocales.json'), 'utf8')
)

listLocales()
  .then((locales) =>
    locales.filter(({ code }) => !outdatedLocales.includes(code))
  )
  .then((locales) =>
    Promise.all(
      locales.map((localeObj) => {
        const { code, fullPath } = localeObj
        const locale = require(`../../../src/locale/${code}`)
        const source = readFileSync(
          path.join(process.cwd(), fullPath)
        ).toString()
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
        const formattedSnapshot = prettier(snapshot, 'markdown')

        if (mode === 'test') {
          return readFile(snapshotPath, 'utf8').then((snapshotFileContent) => {
            if (snapshotFileContent !== formattedSnapshot)
              throw new Error(
                `The snapshot on the disk doesn't match the generated snapshot: ${snapshotPath}. Please run yarn locale-snapshots and commit the results.`
              )
          })
        } else {
          return writeFile(snapshotPath, formattedSnapshot)
        }
      })
    )
  )

  .catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
