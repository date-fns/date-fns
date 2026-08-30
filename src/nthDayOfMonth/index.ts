import { startOfMonth, addDays } from 'date-fns';

/**
 * Returns the nth occurrence of a weekday in a given month.
 * @param date - Any date in the target month
 * @param dayOfWeek - 0 (Sunday) to 6 (Saturday)
 * @param n - nth occurrence (1, 2, 3, etc.)
 * @returns Date of the nth weekday
 */
export default function nthDayOfMonth(
  date: Date,
  dayOfWeek: number,
  n: number
): Date {
  const firstDay = startOfMonth(date);
  const firstDayWeekday = firstDay.getDay();

  let dayOffset = (dayOfWeek - firstDayWeekday + 7) % 7;
  dayOffset += (n - 1) * 7;

  return addDays(firstDay, dayOffset);
}
