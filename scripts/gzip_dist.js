#!/usr/bin/env node

import path from 'path'
import fsp from 'fs-promise'
import globp from 'glob-promise'
import {createGzip} from 'zlib'

const distPath = path.join(process.cwd(), 'dist')
const compressedPath = path.join(distPath, 'compressed')

fsp.remove(compressedPath)
  .then(() => fsp.mkdirp(compressedPath))
  .then(() => globp(path.join(distPath, '*.{js,js.map,json}')))
  .then((files) => {
    files.forEach((file) => {
      const {base} = path.parse(file)
      const input = fsp.createReadStream(file)
      const output = fsp.createWriteStream(path.join(compressedPath, base))
      input.pipe(createGzip()).pipe(output)
    })
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
