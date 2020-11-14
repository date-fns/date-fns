export interface Duration {
  years?: number,
  months?: number,
  weeks?: number,
  days?: number,
  hours?: number,
  minutes?: number,
  seconds?: number,
}

const limits: Record<keyof Duration, number> = {
  years: 0,
  months: 12,
  weeks: 4,
  days: 7,
  hours: 24,
  minutes: 60,
  seconds: 60,
}

const keys: Array<keyof Duration> = [
  'seconds',
  'minutes',
  'hours',
  'days',
  'weeks',
  'months',
  'years',
];

/**
 * @name mergeDurations
 * @category Common Helpers
 * @summary Merge array of given Durations into single duration
 *
 * @description
 * Merge array of given Durations into single duration. Is handle owerflows, so 8 days will become a week and 1 day in resulting Duration.
 *
 * @param [duration] - Duration Objects to merge
 *
 * @returns The duration Object
 * @throws {TypeError} Requires 1 arguments that shoul be an Array
 *
 * @example
 * // Combine two Duration objects into new one.
 *
 * mergeDurations([
 *  {
 *     years: 1,
 *     months: 3,
 *     weeks: 3,
 *     days: 2,
 *   }, {
 *     years: 1,
 *     months: 3,
 *     weeks: 3,
 *     days: 2,
 *   }
 * ])
 * // => { years: 2, months: 7, weeks: 2, days: 4, hours: 0, minutes: 0, seconds: 0 }
 */

export default function mergeDurations(durations: Duration[]) {
  const result: Record<keyof Duration, number> = {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  durations.forEach(duration => {
    result.years += (duration.years || 0)
    result.months += (duration.months || 0)
    result.weeks += (duration.weeks || 0)
    result.days += (duration.days || 0)
    result.hours += (duration.hours || 0)
    result.minutes += (duration.minutes || 0)
    result.seconds += (duration.seconds || 0)
  })

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      return
    }

    const next = keys[index + 1];

    if (result[key] >= limits[key]) {
      result[next] += Math.floor(result[key] / limits[key])
      result[key] = result[key] % limits[key]
    }
  })

  return result
}
