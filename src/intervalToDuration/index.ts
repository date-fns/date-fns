import { normalizeInterval } from "../_lib/normalizeInterval/index.ts";
import { add } from "../add/index.ts";
import { differenceInDays } from "../differenceInDays/index.ts";
import { differenceInHours } from "../differenceInHours/index.ts";
import { differenceInMinutes } from "../differenceInMinutes/index.ts";
import { differenceInMonths } from "../differenceInMonths/index.ts";
import { differenceInSeconds } from "../differenceInSeconds/index.ts";
import { differenceInYears } from "../differenceInYears/index.ts";
import type { ContextOptions, Duration, Interval } from "../types.ts";

/**
 * The {@link intervalToDuration} function options.
 */
export interface IntervalToDurationOptions extends ContextOptions<Date> {}

/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert an interval object to a duration object.
 *
 * @param interval - The interval to convert to duration
 * @param options - The context options
 *
 * @returns The duration object
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * });
 * //=> { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */
export function intervalToDuration(
  interval: Interval,
  options?: IntervalToDurationOptions | undefined,
): Duration {
  const { start, end } = normalizeInterval(options?.in, interval);
  const duration: Duration = {};

  // Determine the sign of the interval (positive if end > start)
  const sign = end.getTime() >= start.getTime() ? 1 : -1;

  const years = differenceInYears(end, start);
  if (years) duration.years = years;

  const remainingMonths = add(start, { years: duration.years });
  let months = differenceInMonths(end, remainingMonths);
  if (months) duration.months = months;

  let remainingDays = add(remainingMonths, { months: duration.months });
  let days = differenceInDays(end, remainingDays);
  if (days) duration.days = days;

  let remainingHours = add(remainingDays, { days: duration.days });
  let hours = differenceInHours(end, remainingHours);

  // If hours has opposite sign to the overall interval, we need to borrow
  if (hours * sign < 0) {
    if (duration.days !== undefined) {
      // Borrow from days
      duration.days -= sign;
      if (duration.days === 0) delete duration.days;
    } else if (duration.months !== undefined) {
      // Borrow from months (which will give us days to work with)
      duration.months -= sign;
      if (duration.months === 0) delete duration.months;
    } else if (duration.years !== undefined) {
      // Borrow from years
      duration.years -= sign;
      if (duration.years === 0) delete duration.years;
    }
    // Recalculate from months forward
    remainingDays = add(remainingMonths, { months: duration.months });
    days = differenceInDays(end, remainingDays);
    if (days) duration.days = days;
    remainingHours = add(remainingDays, { days: duration.days });
    hours = differenceInHours(end, remainingHours);
  }
  if (hours) duration.hours = hours;

  let remainingMinutes = add(remainingHours, { hours: duration.hours });
  let minutes = differenceInMinutes(end, remainingMinutes);

  // If minutes has opposite sign to the overall interval, borrow from hours
  if (minutes * sign < 0 && duration.hours !== undefined) {
    duration.hours -= sign;
    if (duration.hours === 0) delete duration.hours;
    remainingMinutes = add(remainingHours, { hours: duration.hours });
    minutes = differenceInMinutes(end, remainingMinutes);
  }
  if (minutes) duration.minutes = minutes;

  let remainingSeconds = add(remainingMinutes, { minutes: duration.minutes });
  let seconds = differenceInSeconds(end, remainingSeconds);

  // If seconds has opposite sign to the overall interval, borrow from minutes
  if (seconds * sign < 0 && duration.minutes !== undefined) {
    duration.minutes -= sign;
    if (duration.minutes === 0) delete duration.minutes;
    remainingSeconds = add(remainingMinutes, { minutes: duration.minutes });
    seconds = differenceInSeconds(end, remainingSeconds);
  }
  if (seconds) duration.seconds = seconds;

  return duration;
}
