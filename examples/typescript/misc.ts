import * as format from 'date-fns/format'

const result = format('2017-01-25T21:28:15.000Z', 'dd.MM.yyyy HH:mm:ss')
console.log(result === '25.01.2017 21:28:15')
