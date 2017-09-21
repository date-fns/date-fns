import format from 'date-fns/esm/format'
import eo from 'date-fns/esm/locale/eo'

const result = format('2017-01-25T21:28:15.000Z', 'dddd, DD MMMM HH:mm:ss', {locale: eo})
console.log(result === 'merkredo, 25 januaro 21:28:15')
