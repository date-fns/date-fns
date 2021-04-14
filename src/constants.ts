export const MILLISECONDS_IN_MINUTE = 60000
export const MILLISECONDS_IN_HOUR = 3600000
export const MILLISECONDS_IN_WEEK = 604800000
export const MILLISECONDS_IN_DAY = 86400000

// Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
// 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
export const YEAR_IN_DAYS = 365.2425


/**
 *  Maximum allowed time.
 */
export const MAX_TIME = 8640000000000000 // 10^8 * 24 * 60 * 60 * 1000

/**
 *  Minimum allowed time.
 */
export const MIN_TIME = -MAX_TIME
