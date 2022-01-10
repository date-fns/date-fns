import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import prettier from 'prettier'
import listLocales from '../../_lib/listLocales'

/**
 * Dynamically generates the '/docs/i18nLocales.md` file
 */
export default async () => {
  const results = await parseLocalesJsdocs()
  checkSummaryUniqueness(results)
  await writeToMarkdownFile(results)
}

interface LocaleMetadata {
  name: string
  code: string
  iso_639_2: string
  summary: string
  language: string
}

const ISO_639_2_Regex = /@iso-639-2\s+(.+)/
const summaryRegex = /@summary\s+(.+)/
const languageRegex = /@language\s+(.+)/
const cleanRegex = /\.$/

async function parseLocalesJsdocs(): Promise<LocaleMetadata[]> {
  const locales = await listLocales()

  const jobs = locales.map(async (locale) => {
    const content = await readFile(path.resolve(locale.fullPath), 'utf-8')

    return {
      name: locale.name,
      code: locale.code,
      summary: extractJsdocValue(summaryRegex, content, locale.code),
      iso_639_2: extractJsdocValue(ISO_639_2_Regex, content, locale.code),
      language: extractJsdocValue(languageRegex, content, locale.code),
    }
  })

  return Promise.all(jobs)
}

function extractJsdocValue(
  regex: RegExp,
  content: string,
  code: string
): string {
  const match = regex.exec(content)

  if (!match)
    throw Error(`No jsdocs in locale '${code}' matches '${regex.source}'`)

  return match[1].replace(cleanRegex, '')
}

function checkSummaryUniqueness(results: LocaleMetadata[]): void {
  const mem: { [key: string]: string } = {}

  results.forEach((result) => {
    const val = result.summary

    if (mem[val]) {
      throw new Error(
        `Both locales '${mem[val]}' and '${result.code}' share the same @summary jsdoc of '${val}'`
      )
    } else {
      mem[val] = result.code
    }
  })
}

function arrayToMarkdownTable(rows: LocaleMetadata[]): string {
  const cols = Object.keys(rows[0])

  // build header
  const contentHeader = cols.map((col) => ` ${col} `).join('|')

  // build header separator
  const separator = cols.map(() => '-').join('|')

  // build content
  const content = rows.map((row) =>
    cols.map((col) => ` ${row[col as keyof LocaleMetadata]} `).join('|')
  )

  // pad sides with pipes and join into string
  const final = [contentHeader, separator, ...content]
    .map((c) => '|' + c + '|')
    .join('\n')

  return final
}

async function writeToMarkdownFile(results: LocaleMetadata[]): Promise<void> {
  // markdown table
  const markdownTable = prettier.format(arrayToMarkdownTable(results), {
    parser: 'markdown',
  })

  // JSON version of results
  const resultsAsJSON = prettier.format(
    JSON.stringify(
      results.map((result) => {
        return {
          code: result.code,
          summary: result.summary,
          language: result.language,
        }
      })
    ),
    { parser: 'json' }
  )

  // file template
  const template = `<!-- This file is generated automatically by \`scripts/build/docs.ts\`. Please, don't change it.-->

# Available Locales

## Full list ( ${results.length})

${markdownTable}

## as JSON

${'```'}json
${resultsAsJSON}${'```'}`

  // write md file to disk
  const filepath = path.resolve(process.cwd(), 'docs/i18nLocales.md')
  await writeFile(filepath, template)
}
