import { maxTime as rootMaxTime, minTime as rootMinTime } from 'date-fns'
import { minTime } from 'date-fns/constants'
import { minTime as fpMinTime } from 'date-fns/fp'

console.log(
  rootMaxTime === 8640000000000000 &&
    rootMinTime === minTime &&
    minTime === fpMinTime
)
