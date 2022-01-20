import toDate from '../../toDate/index'
import requiredArgs from '../requiredArgs/index'
import startOfUTCISOWeek from '../startOfUTCISOWeek/index'

export default function getUTCISOWeekYear(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getUTCFullYear()

  const fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0)
  const startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear)

  const fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0)
  const startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
