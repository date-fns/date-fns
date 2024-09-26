import { isValid } from "../isValid/index.js";
import { toDate } from "../toDate/index.js";
import { addLeadingZeros } from "../_lib/addLeadingZeros/index.js";

/**
 * The {@link formatRFC822} function options.
 */
export interface FormatRFC822Options {
  /** Day is optional see Section 5.1 : https://datatracker.ietf.org/doc/html/rfc822#section-5.1)
 */
  includeDay?: boolean;
}
/**
 * @name formatRFC822
 * @category Common Helpers
 * @summary Format the date according to the RFC 822 standard (https://datatracker.ietf.org/doc/html/rfc822#section-5).
 *
 * @description
 * Return the formatted date string in RFC 822 format.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. 
 * 
 * 
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 822 format:
 * formatRFC822(new Date(2019, 8, 18, 19, 0, 52)));
 * //=> '19 Sep 2019 00:00:52 -05:00'
 * 
 * @example
 * // Represent 18 September 2019 in RFC 822 format, optional day included
 * formatRFC822(new Date(2019, 8, 18, 19, 0, 52), {includeDay: true}))
 * //=> 'Thu, 19 Sep 2019 00:00:52 -05:00"
 */
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatRFC822<DateType extends Date>(
  date: DateType | number | string,
  options?: FormatRFC822Options, 
): string {
  const _date = toDate(date);

  if (!isValid(_date)) {
    throw new RangeError("Invalid time value");
  }

  const dayName = days[_date.getUTCDay()];
  const dayOfMonth = addLeadingZeros(_date.getUTCDate(), 2);
  const monthName = months[_date.getUTCMonth()];
  const year = _date.getUTCFullYear();

  console.log("year",year)

  const hour = addLeadingZeros(_date.getUTCHours(), 2);
  const minute = addLeadingZeros(_date.getUTCMinutes(), 2);
  const second = addLeadingZeros(_date.getUTCSeconds(), 2);

  let offset = "";
  const tzOffset = _date.getTimezoneOffset();

  if (tzOffset !== 0) {
    const absoluteOffset = Math.abs(tzOffset);
    const hourOffset = addLeadingZeros(Math.trunc(absoluteOffset / 60), 2);
    const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
    // If less than 0, the sign is +, because it is ahead of time.
    const sign = tzOffset < 0 ? "+" : "-";

    offset = `${sign}${hourOffset}:${minuteOffset}`;
  } else {
    offset = "Z"; 
  }
  return `${options?.includeDay ? dayName + ", " : ""}${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} ${offset}`;
}