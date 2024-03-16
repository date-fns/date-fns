import { isValid } from "../isValid/index.js";
import { toDate } from "../toDate/index.js";
import { addLeadingZeros } from "../_lib/addLeadingZeros/index.js";

/**
 * The {@link formatRFC3339} function options.
 */
export interface FormatRFC3339Options {
  /** The number of digits after the decimal point after seconds, defaults to 0 */
  fractionDigits?: 0 | 1 | 2 | 3;
}

/**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format:
 * formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 3 digits of second fraction
 * formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), {
 *   fractionDigits: 3
 * })
 * //=> '2019-09-18T19:00:52.234Z'
 */
export function formatRFC3339<DateType extends Date>(
  date: DateType | number | string,
  options?: FormatRFC3339Options,
): string {
  const _date = toDate(date);

  if (!isValid(_date)) {
    throw new RangeError("Invalid time value");
  }

  const fractionDigits = options?.fractionDigits ?? 0;

  const day = addLeadingZeros(_date.getDate(), 2);
  const month = addLeadingZeros(_date.getMonth() + 1, 2);
  const year = _date.getFullYear();

  const hour = addLeadingZeros(_date.getHours(), 2);
  const minute = addLeadingZeros(_date.getMinutes(), 2);
  const second = addLeadingZeros(_date.getSeconds(), 2);

  let fractionalSecond = "";
  if (fractionDigits > 0) {
    const milliseconds = _date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, fractionDigits - 3),
    );
    fractionalSecond = "." + addLeadingZeros(fractionalSeconds, fractionDigits);
  }

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

  return `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}${offset}`;
}
