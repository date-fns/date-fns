#!/usr/bin/env yarn tsx

/**
 * @file
 * The script generates the FP functions using the docs JSON file.
 *
 * It's a part of the build process.
 */

import { readFnsFromJSON } from '@date-fns/docs'
import { mkdir, stat, writeFile } from 'fs/promises'

async function main() {
  const fns = await readFnsFromJSON('tmp/docs.json')

  await Promise.all(
    fns.map(async ({ ref, fn }) => {
      const hasOptions = !!fn.signatures.find((singature: any) =>
        singature.parameters?.find((p: any) => p.name === 'options')
      )
      const fnArity = fn.signatures.reduce<number>(
        (acc: number, signature: any) =>
          Math.max(acc, signature.parameters?.length || 0),
        0
      )

      async function writeFn(
        arity: number,
        sourceName: string,
        name = sourceName
      ) {
        const source = getFPFn(sourceName, arity)
        const dir = `./src/fp/${name}`

        if (!(await exists(dir))) await mkdir(dir)
        return writeFile(`${dir}/index.ts`, source)
      }

      return Promise.all([
        writeFn(hasOptions ? fnArity - 1 : fnArity, ref.name),
        hasOptions && writeFn(fnArity, ref.name, ref.name + 'WithOptions'),
      ])
    })
  )
}

async function exists(filePath: string) {
  try {
    await stat(filePath)
  } catch (err) {
    return false
  }
  return true
}

main()

function getFPFn(sourceName: string, arity: number): string {
  return `// This file is generated automatically by \`scripts/build/fp.ts\`. Please, don't change it.

import fn from '../../${sourceName}/index'
import convertToFP from '../_lib/convertToFP/index'

export default convertToFP(fn, ${arity})
`
}
