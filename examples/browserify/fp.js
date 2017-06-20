var addYears = require('date-fns/fp/addYears')
var dateFns = require('date-fns/fp')
var formatWithOptions = dateFns.formatWithOptions
var eo = require('date-fns/locale/eo')

var addFiveYears = addYears(5)
var dateToString = formatWithOptions({locale: eo}, 'D MMMM YYYY')

var dates = [
  new Date(2017, 0 /* Jan */, 1),
  new Date(2017, 1 /* Feb */, 11),
  new Date(2017, 6 /* Jul */, 2)
]

var formattedDates = dates
  .map((date) => dateToString(addFiveYears(date)))
  .join(', ')

console.log(formattedDates === '1 januaro 2022, 11 februaro 2022, 2 julio 2022')
