import setMonth from '../setMonth/index'

/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param date - the date to be changed
 * @param quarter - the quarter of the new date
 * @returns the new date with the quarter set
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
export default function setQuarter(date: Date | number, quarter: number): Date {
  const resultDate = new Date(date)
  const resultQuarter = Math.trunc(quarter)
  const oldQuarter = Math.floor(resultDate.getMonth() / 3) + 1
  const diff = resultQuarter - oldQuarter
  return setMonth(resultDate, resultDate.getMonth() + diff * 3)
}
