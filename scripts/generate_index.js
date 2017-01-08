import fs from 'fs'
import path from 'path'
import listFiles from './_lib/list_files'

const files = listFiles()

const indexLines = files
  .map(fn => `export {default as ${fn.name}} from '${fn.path.replace(/\.js$/, '')}/index.js'`)

fs.writeFileSync(path.join(process.cwd(), 'index.js'), indexLines.join('\n'))
