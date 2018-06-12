var dateFns = require('date-fns')
var formatDate = dateFns.formatDate
var eo = require('date-fns/locale/eo')

var result = formatDate('2017-01-25T21:28:15.000Z', 'eeee, dd MMMM HH:mm:ss', {locale: eo})
console.log(result === 'merkredo, 25 januaro 21:28:15')
