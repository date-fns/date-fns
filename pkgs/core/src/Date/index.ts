/**
 * Creates a Date using day-month-year argument order.
 *
 * @example
 * // 24 December 2025
 * new Date(24, 12, 2025);
 */
export class Date extends globalThis.Date {
  constructor();
  constructor(value: string | number | globalThis.Date);
  constructor(
    day: number,
    month: number,
    year: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number,
  );
  constructor(
    dayOrValue?: number | string | globalThis.Date,
    month?: number,
    year?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number,
  ) {
    if (
      typeof dayOrValue === "number" &&
      typeof month === "number" &&
      typeof year === "number"
    ) {
      super(
        year,
        month - 1,
        dayOrValue,
        hours ?? 0,
        minutes ?? 0,
        seconds ?? 0,
        milliseconds ?? 0,
      );
      return;
    }

    if (dayOrValue === undefined) {
      super();
      return;
    }

    super(dayOrValue);
  }
}