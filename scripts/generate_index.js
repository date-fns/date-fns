import fs from 'fs'
import path from 'path'
import listFiles from './_lib/list_files'

const indexLines = listFiles()
  .map((fn) => {
    return [`import ${fn.name} from '${fn.path.replace(/\.js$/, '')}/index.js'`]
      .concat(`export ${fn.name}`)
      .join('\n')
  })

fs.writeFileSync(path.join(process.cwd(), 'index.js'), `${indexLines.join('\n\n')}\n`)
