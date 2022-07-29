const fs = require('fs').promises
const listFns = require('./scripts/_lib/listFns')

const effect = async () => {
  const fns = await listFns()
  for (const fn of fns) {
    const file = await fs.readFile(fn.fullPath, 'utf8')
    const lines = file.split('\n')

    let foundReadonlyDate = false
    for (const line of lines) {
      if (line.includes('ReadonlyDate')) {
        foundReadonlyDate = true
        break
      }
    }

    if (!foundReadonlyDate) {
      const newLines = []
      let yo = false
      for (const line of lines) {
        if (line === '' && !yo) {
          newLines.push("import type { ReadonlyInterval } from '../types'")
          yo = true
          newLines.push('')
        }
        newLines.push(line)
      }
      await fs.writeFile(fn.fullPath, newLines.join('\n'))
    }
  }
}

effect()
