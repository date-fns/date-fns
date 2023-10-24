#!/usr/bin/env yarn tsx

/**
 * @file
 * The script generates the locale snapshots.
 *
 * It's a part of the build process.
 */

import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { Locale } from '../../../src/locale/types'
import { listLocales } from '../../_lib/listLocales'
import { formatCode } from '../_lib/prettier'
import renderFormatDistance from './renderFormatDistance'
import renderFormatDistanceStrict from './renderFormatDistanceStrict'
import renderFormatDuration from './renderFormatDuration'
import renderFormatParse from './renderFormatParse'
import renderFormatRelative from './renderFormatRelative'

const mode = process.argv[2] || 'generate'

if (process.env.TZ?.toLowerCase() !== 'utc')
  throw new Error('The locale snapshots generation must be run with TZ=utc')

listLocales()
  .then((locales) =>
    Promise.all(
      locales.map(async (localeObj) => {
        const { code, fullPath } = localeObj
        const locale: Locale = (await import(`../../../src/locale/${code}`))
          .default
        const source = await readFile(
          path.join(process.cwd(), fullPath)
        ).toString()
        const languageName = source.match(/\* @language (.*)/)?.[1]

        const snapshot = `# ${languageName} (${code}) locale

${renderFormatParse(locale)}

${renderFormatDistance(locale)}

${renderFormatDistanceStrict(locale)}

${renderFormatRelative(locale)}

${renderFormatDuration(locale)}

`

        const snapshotPath = path.join(
          path.resolve(process.cwd(), path.dirname(fullPath)),
          'snapshot.md'
        )
        const formattedSnapshot = formatCode(snapshot, 'markdown')

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
