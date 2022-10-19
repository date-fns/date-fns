import type { GenericDateConstructor } from '../types'

/**
 * @name constructFrom
 * @category Date Extension Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @param date {Date|number} - the reference date to take constructor from
 * @param value {Date|number} - the value to create the date
 * @returns date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
export default function constructFrom<DateType extends Date>(
  date: DateType | number,
  value: Date | number
): DateType {
  if (date instanceof Date) {
    return new (date.constructor as GenericDateConstructor<DateType>)(value)
  } else {
    return new Date(value) as DateType
  }
}
