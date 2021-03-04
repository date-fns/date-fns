#!/usr/bin/env node

/**
 * @file
 * The script extracts the actual package version from $VERSION
 * and writes it to package.json
 *
 * It's a part of the release process.
 */

const path = require('path')
const fs = require('fs')
const beautify = require('js-beautify')['js_beautify']

// Extract version from VERSION
let version
try {
  ;[, version] = process.env.VERSION.match(/v(.+)/)
} catch (err) {
  console.error(`Can not extract version from VERSION (${process.env.VERSION})`)
  console.error(err)
  process.exit(1)
}

console.log(`Version: ${version}`)

console.log('Writing to package.json...')
// Write package.json with the version equal to the version encoded in the tag name
const packagePath = path.join(process.cwd(), 'package.json')
const packageContent = JSON.parse(fs.readFileSync(packagePath).toString())
Object.assign(packageContent, { version })
const newPackageContentStr = beautify(JSON.stringify(packageContent), {
  indent_size: 2,
})
fs.writeFileSync(packagePath, `${newPackageContentStr}\n`)
