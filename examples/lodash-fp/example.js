import addYears from 'date-fns/fp/addYears'
import formatWithOptions from 'date-fns/fp/formatWithOptions'
import eo from 'date-fns/locale/eo'

import compose from 'lodash/fp/compose'
import toUpper from 'lodash/fp/toUpper'
import isEqual from 'lodash/isEqual'

const addFiveYears = addYears(5)
const dateToString = formatWithOptions({locale: eo}, 'd MMMM yyyy')

const dates = ['2017-01-01', '2017-02-11', '2017-07-02']

const formattedDates = dates.map(compose(toUpper, dateToString, addFiveYears))

console.log(isEqual(formattedDates, ['1 JANUARO 2022', '11 FEBRUARO 2022', '2 JULIO 2022']))
