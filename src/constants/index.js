const maxMillis = Math.pow(10, 8) * 24 * 60 * 60 * 1000

/**
 * @name constants
 * @category Constants
 * @summary Useful constants for base dates
 *
 * @description
 * Useful constants for base dates
 */

export const maxDate = new Date(maxMillis)
export const epochDate = new Date(0)
export const minDate = new Date(-maxMillis)
