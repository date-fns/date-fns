import { addLeadingZeros } from "../_lib/addLeadingZeros/index.ts";
import { isValid } from "../isValid/index.ts";
import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link formatRFC3339} function options.
 */
export interface FormatRFC3339Options extends ContextOptions<Date> {
  /** The number of digits after the decimal point after seconds, defaults to 0 */
  fractionDigits?: 0 | 1 | 2 | 3;
  /** The {@link https://datatracker.ietf.org/doc/html/rfc3339#section-5.6|format} of the output string.
   *
   * @default "date-time"
   */
  format?:
    | "date-fullyear"
    | "date-month"
    | "date-mday"
    | "time-hour"
    | "time-minute"
    | "time-second"
    | "time-secfrac"
    | "time-numoffset"
    | "time-offset"
    | "partial-time"
    | "full-date"
    | "full-time"
    | "date-time";
}

/**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
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
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 full-date format
 * formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), {
 *   format: "full-date"
 * })
 * //=> '2019-09-18'
 */
export function formatRFC3339(
  date: DateArg<Date> & {},
  options?: FormatRFC3339Options,
): string {
  const date_ = toDate(date, options?.in);

  if (!isValid(date_)) {
    throw new RangeError("Invalid time value");
  }

  const fractionDigits = options?.fractionDigits ?? 0;
  const format = options?.format ?? "date-time";

  const dateMday = addLeadingZeros(date_.getDate(), 2);
  const dateMonth = addLeadingZeros(date_.getMonth() + 1, 2);
  const dateFullyear = addLeadingZeros(date_.getFullYear(), 4);

  const timeHour = addLeadingZeros(date_.getHours(), 2);
  const timeMinute = addLeadingZeros(date_.getMinutes(), 2);
  const timeSecond = addLeadingZeros(date_.getSeconds(), 2);

  let timeSecfrac = "";
  if (fractionDigits > 0) {
    const milliseconds = date_.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, fractionDigits - 3),
    );
    timeSecfrac = "." + addLeadingZeros(fractionalSeconds, fractionDigits);
  }

  const tzOffset = date_.getTimezoneOffset();
  const absoluteOffset = Math.abs(tzOffset);
  const hourOffset = addLeadingZeros(Math.trunc(absoluteOffset / 60), 2);
  const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
  // If less than 0, the sign is +, because it is ahead of time.
  const sign = tzOffset <= 0 ? "+" : "-";
  const timeNumOffset = `${sign}${hourOffset}:${minuteOffset}`;

  const timeOffset = tzOffset !== 0 ? timeNumOffset : "Z";

  const fullDate = `${dateFullyear}-${dateMonth}-${dateMday}`;

  const partialTime = `${timeHour}:${timeMinute}:${timeSecond}${timeSecfrac}`;
  const fullTime = `${partialTime}${timeOffset}`;

  const dateTime = `${fullDate}T${fullTime}`;

  switch (format) {
    case "date-fullyear": {
      return dateFullyear;
    }
    case "date-month": {
      return dateMonth;
    }
    case "date-mday": {
      return dateMday;
    }

    case "time-hour": {
      return timeHour;
    }
    case "time-minute": {
      return timeMinute;
    }
    case "time-second": {
      return timeSecond;
    }

    case "time-secfrac": {
      return timeSecfrac;
    }
    case "time-numoffset": {
      return timeNumOffset;
    }
    case "time-offset": {
      return timeOffset;
    }

    case "partial-time": {
      return `${timeHour}:${timeMinute}:${timeSecond}${timeSecfrac}`;
    }

    case "full-date": {
      return fullDate;
    }
    case "full-time": {
      return fullTime;
    }

    case "date-time": {
      return dateTime;
    }
    default: {
      throw new Error(`Invalid format option: ${format satisfies never}`);
    }
  }
}
