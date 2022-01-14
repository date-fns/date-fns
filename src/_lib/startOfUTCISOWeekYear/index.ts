import getUTCISOWeekYear from '../getUTCISOWeekYear/index'
import startOfUTCISOWeek from '../startOfUTCISOWeek/index'
import requiredArgs from '../requiredArgs/index'

export default function startOfUTCISOWeekYear(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const year = getUTCISOWeekYear(dirtyDate)
  const fourthOfJanuary = new Date(0)
  fourthOfJanuary.setUTCFullYear(year, 0, 4)
  fourthOfJanuary.setUTCHours(0, 0, 0, 0)
  const date = startOfUTCISOWeek(fourthOfJanuary)
  return date
}
