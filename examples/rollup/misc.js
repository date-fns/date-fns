import { format } from 'date-fns/esm'
import { eo } from 'date-fns/esm/locale'

const result = format(
  new Date(2017, 0, 25, 21, 28, 15),
  'eeee, dd MMMM HH:mm:ss',
  { locale: eo }
)
console.log(result === 'merkredo, 25 januaro 21:28:15')
