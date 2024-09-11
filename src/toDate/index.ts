import { constructFromSymbol } from "../constants/index.js";
import type {
  ConstructableDate,
  ContextFn,
  DateArg,
  GenericDateConstructor,
} from "../types.js";

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
export function toDate<
  DateType extends Date | ConstructableDate,
  ResultDate extends Date = DateType,
>(
  argument: DateArg<DateType>,
  context?: ContextFn<ResultDate> | undefined,
): ResultDate {
  // [TODO] Use constructFrom here instead?
  if (context) return context(argument);

  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (typeof argument === "object" && constructFromSymbol in argument) {
    return argument[constructFromSymbol](argument);
  } else if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new (argument.constructor as GenericDateConstructor<ResultDate>)(
      +argument,
    );
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument) as ResultDate;
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN) as ResultDate;
  }
}
