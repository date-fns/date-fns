import formatDate from 'date-fns/esm/formatDate'
import eo from 'date-fns/esm/locale/eo'

const result = formatDate('2017-01-25T21:28:15.000Z', 'eeee, dd MMMM HH:mm:ss', { locale: eo })
console.log(result === 'merkredo, 25 januaro 21:28:15')
