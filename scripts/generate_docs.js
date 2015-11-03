import fs from 'fs'
import path from 'path'
import parseJSDoc from 'jsdoc-parse'
import listFunctions from './_lib/list_functions'

const docPromises = listFunctions()
  .map((fn) => {
    return new Promise((resolve, reject) => {
      const stream = parseJSDoc({src: fn.fullPath})
      var data = ''

      stream.on('error', (err) => {
        console.error(err)
        process.exit(1)
      })

      stream.on('data', (chunk) => data += chunk)
      stream.on('end', () => resolve(JSON.parse(data)))
    })
  })

Promise.all(docPromises)
  .then((docs) => {
    // Specifies the order
    const groupsTemplate = {
      'Common Helpers': [],
      'Range Helpers': [],
      'Millisecond Helpers': [],
      'Second Helpers': [],
      'Minute Helpers': [],
      'Hour Helpers': [],
      'Day Helpers': [],
      'Weekday Helpers': [],
      'Week Helpers': [],
      'ISO Week Helpers': [],
      'Month Helpers': [],
      'Quarter Helpers': [],
      'Year Helpers': [],
      'ISO Week-Numbering Year Helpers': []
    }

    const groupedDocs = docs
      .map((el) => el[0])
      .reduce((acc, doc) => {
        (acc[doc.category] = acc[doc.category] || []).push(doc)
        return acc
      }, groupsTemplate)

    fs.writeFileSync(path.join(process.cwd(), 'dist', 'date_fns_docs.json'), JSON.stringify(groupedDocs))
  })
