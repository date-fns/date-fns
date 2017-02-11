import format from 'date-fns/es/format'
import eoLocale from 'date-fns/es/locale/eo'

const result = format('2017-01-25T21:28:15.000Z', 'dddd, DD MMMM HH:mm:ss', {locale: eoLocale})
console.log(result === 'merkredo, 25 januaro 21:28:15')
