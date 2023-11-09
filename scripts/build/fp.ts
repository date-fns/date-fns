#!/usr/bin/env yarn tsx

/**
 * @file
 * The script generates the FP functions using the docs JSON file.
 *
 * It's a part of the build process.
 */

import { readRefsFromJSON } from '@date-fns/docs'
import { mkdir, stat, writeFile } from 'fs/promises'
import path from 'path'
import docsConfig from '../../docs/config'

async function main() {
  const fns = await readRefsFromJSON(
    docsConfig.config,
    path.resolve('../../docs/')
  )

  await Promise.all(
    fns.map(async (ref) => {
      if (ref.kind !== 'function') return

      const name = ref.ref.name
      const hasOptions = !!ref.fn.signatures.find((singature: any) =>
        singature.parameters?.find((p: any) => p.name === 'options')
      )
      const fnArity = ref.fn.signatures.reduce<number>(
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
        writeFn(hasOptions ? fnArity - 1 : fnArity, name),
        hasOptions && writeFn(fnArity, name, name + 'WithOptions'),
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
