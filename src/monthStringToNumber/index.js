/**
 * @name monthStringToNumber
 * @category Month Helpers
 * @summary Map English name of Month to it's given numeric version
 *
 * @description
 * Map English name of Month to it's given numeric version
 * The result will be passed back as a "two-digit" string
 *
 * @param {String} monthName - the name of a month
 * @returns {String} the numeric version of the given month
 * @throws {TypeError} 1 argument required
 * @throws {TypeError} Invalid month supplied
 * @throws {TypeError} Non-string given as month value
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = monthStringToNumber(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
export default function monthStringToNumber (monthName) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (typeof monthName !== 'string') {
    throw new TypeError('monthName must be a string')
  }

  var normalizeMonthName = monthName.toUpperCase().trim()
  if (normalizeMonthName.indexOf('.') !== -1) {
    normalizeMonthName = normalizeMonthName.split('.')[0]
  }

  switch (normalizeMonthName) {
    case 'JANUARY':
    case 'JAN':
      return '01'
    case 'FEBRUARY':
    case 'FEB':
      return '02'
    case 'MARCH':
    case 'MAR':
      return '03'
    case 'APRIL':
    case 'APR':
      return '04'
    case 'MAY':
      return '05'
    case 'JUNE':
    case 'JUN':
      return '06'
    case 'JULY':
    case 'JUL':
      return '07'
    case 'AUGUST':
    case 'AUG':
      return '08'
    case 'SEPTEMBER':
    case 'SEPT':
    case 'SEP':
      return '09'
    case 'OCTOBER':
    case 'OCT':
      return '10'
    case 'NOVEMBER':
    case 'NOV':
      return '11'
    case 'DECEMBER':
    case 'DEC':
      return '12'
    default:
      throw new TypeError('Invalid month supplied')
  }
}
