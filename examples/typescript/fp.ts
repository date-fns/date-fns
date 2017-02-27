import addYears from 'date-fns/esm/fp/addYears'
import {formatWithOptions} from 'date-fns/esm/fp'
import eoLocale from 'date-fns/esm/locale/eo'

const addFiveYears = addYears(5)
const dateToString = formatWithOptions({locale: eoLocale}, 'D MMMM YYYY')

const dates = [
  new Date(2017, 0 /* Jan */, 1),
  new Date(2017, 1 /* Feb */, 11),
  new Date(2017, 6 /* Jul */, 2)
]

const formattedDates = dates
  .map((date) => dateToString(addFiveYears(date)))
  .join(', ')

console.log(formattedDates === '1 januaro 2022, 11 februaro 2022, 2 julio 2022')
