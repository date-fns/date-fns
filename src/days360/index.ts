import { constructFrom } from "../constructFrom/index.ts";
import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link days360} function options.
 */
export interface Days360Options extends ContextOptions<Date> {
  /**
   * If false or omitted, uses the US/NASD method (30US/360).
   * If true, uses the European method (30E/360).
   * @defaultValue false
   */
  method?: boolean;
}

/**
 * @name days360
 * @category Day Helpers
 * @summary Get the number of days between two dates based on a 360-day year.
 *
 * @description
 * Calculate the number of days between two dates based on a 360-day year
 * (twelve 30-day months), as used in financial/accounting calculations such as
 * bond interest accrual. This matches the behavior of the DAYS360 function in
 * Excel and Google Sheets.
 *
 * Two methods are supported via the `method` option:
 *
 * - **US/NASD method** (`method: false`, default): Adjusts February end-of-month
 *   dates for the start date. If the end date falls on the 31st and the start
 *   date is before the 30th, the end date advances to the 1st of the next month.
 *
 * - **European method** (`method: true`): Caps both start and end day to 30 if
 *   they fall on the 31st. No special February handling.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 *
 * @param startDate - The start date of the period
 * @param endDate - The end date of the period
 * @param options - An object with options
 *
 * @returns The number of days between the dates on a 360-day year basis
 *
 * @example
 * // How many days (360-day basis) between Jan 1 and Dec 31 2011?
 * const result = days360(new Date(2011, 0, 1), new Date(2011, 11, 31))
 * //=> 360
 *
 * @example
 * // Using the European method:
 * const result = days360(new Date(2011, 0, 15), new Date(2011, 2, 31), { method: true })
 * //=> 75
 */
export function days360<DateType extends Date>(
  startDate: DateArg<DateType>,
  endDate: DateArg<DateType>,
  options?: Days360Options | undefined,
): number {
  const [startDate_, endDate_] = normalizeDates(
    options?.in,
    startDate,
    endDate,
  );

  if (isNaN(startDate_.getTime()) || isNaN(endDate_.getTime())) return NaN;

  let startYear = startDate_.getFullYear();
  let startMonth = startDate_.getMonth() + 1;
  let startDay = startDate_.getDate();

  let endYear = endDate_.getFullYear();
  let endMonth = endDate_.getMonth() + 1;
  let endDay = endDate_.getDate();

  if (options?.method) {
    startDay = Math.min(startDay, 30);
    endDay = Math.min(endDay, 30);
  } else {
    if (isLastDayOfFebruary(startDate_) || startDay === 31) startDay = 30;
    if (isLastDayOfFebruary(endDate_) || endDay === 31) {
      if (startDay >= 30) {
        endDay = 30;
      } else {
        endMonth += 1;
        endDay = 1;
      }
    }
  }

  return (
    (endYear - startYear) * 360 +
    (endMonth - startMonth) * 30 +
    (endDay - startDay)
  );
}

function isLastDayOfFebruary(date: Date): boolean {
  const nextDay = constructFrom(date, date.getTime());
  nextDay.setDate(date.getDate() + 1);
  return date.getMonth() === 1 && nextDay.getMonth() === 2;
}
