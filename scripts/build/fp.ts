#!/usr/bin/env yarn ts-node

/**
 * @file
 * The script generates the FP functions using the docs JSON file.
 *
 * It's a part of the build process.
 */

import { existsSync } from 'fs'
import { mkdir, readFile, unlink, writeFile } from 'fs/promises'

interface DocFn {
  kind: string
  isFPFn: boolean

  title: string
  generatedFrom: string
  args: {
    length: number
  }
}

;(async () => {
  const jsDocs = JSON.parse((await readFile('./tmp/docs.json')).toString())

  const fpFns: DocFn[] = Object.keys(jsDocs)
    .map((category) => jsDocs[category])
    .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
    .filter((doc: DocFn) => doc.kind === 'function' && doc.isFPFn)

  fpFns.forEach(buildFPFn)
})()

function getFPFn(initialFnName: string, arity: number): string {
  return `// This file is generated automatically by \`scripts/build/fp.ts\`. Please, don't change it.

import fn from '../../${initialFnName}/index'
import convertToFP from '../_lib/convertToFP/index'

export default convertToFP(fn, ${arity})
`
}

async function buildFPFn({
  title,
  generatedFrom,
  args: { length },
}: DocFn): Promise<void> {
  const source = getFPFn(generatedFrom, length)
  const dir = `./src/fp/${title}`

  if (!existsSync(dir)) await mkdir(dir)
  writeFile(`${dir}/index.ts`, source)

  // remove legacy index.js (if any)
  const jsPath = `${dir}/index.js`
  if (existsSync(jsPath)) unlink(jsPath)
}
