const dateFns = require('date-fns')
const constants = require('date-fns/constants')
const { minTime: fpMinTime } = require('date-fns/fp')

console.log(
  dateFns.maxTime === 8640000000000000 &&
    dateFns.minTime === constants.minTime &&
    constants.minTime === fpMinTime
)
