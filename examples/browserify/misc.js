var dateFns = require('date-fns')
var format = dateFns.format
var eo = require('date-fns/locale/eo')

var result = format(
  new Date(2017, 0, 25, 21, 28, 15),
  'eeee, dd MMMM HH:mm:ss',
  { locale: eo }
)
console.log(result === 'merkredo, 25 januaro 21:28:15')
