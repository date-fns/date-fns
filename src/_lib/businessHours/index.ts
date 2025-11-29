import { isSameDay } from "../../isSameDay/index.ts";
import { toDate } from "../../toDate/index.ts";
import type { ContextOptions, DateArg } from "../../types.ts";

/**
 * Business hours configuration options.
 */
export interface BusinessHoursOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {
  /** Start of business day in "HH:MM" format. Default: "09:00" */
  startOfDay?: string;
  /** End of business day in "HH:MM" format. Default: "17:00" */
  endOfDay?: string;
  /** Array of working days (0=Sunday, 6=Saturday). Default: [1,2,3,4,5] (Mon-Fri) */
  workingDays?: number[];
  /** Array of holiday dates. Default: [] */
  holidays?: DateArg<Date>[];
}

/**
 * Normalized business hours options with defaults applied.
 */
export interface NormalizedBusinessHoursOptions {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  workingDays: number[];
  holidays: DateArg<Date>[];
}

/**
 * Parse time string in "HH:MM" format.
 */
export function parseTimeString(
  time: string,
): { hours: number; minutes: number } {
  if (typeof time !== "string") {
    throw new TypeError("Time must be a string");
  }

  const parts = time.split(":");
  if (parts.length !== 2) {
    throw new RangeError(
      `Invalid time format: "${time}". Expected "HH:MM" format`,
    );
  }

  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    throw new RangeError(
      `Invalid time value: "${time}". Hours must be 0-23 and minutes must be 0-59`,
    );
  }

  return { hours, minutes };
}

/**
 * Check if a date is a holiday.
 */
export function isHoliday(
  date: Date,
  holidays: DateArg<Date>[],
  options?: ContextOptions<Date>,
): boolean {
  return holidays.some((holiday) => isSameDay(date, holiday, options));
}

/**
 * Check if a day of week is a working day.
 */
export function isWorkingDay(date: Date, workingDays: number[]): boolean {
  const dayOfWeek = date.getDay();
  return workingDays.includes(dayOfWeek);
}

/**
 * Normalize business hours options with defaults.
 */
export function normalizeBusinessHoursOptions<DateType extends Date>(
  options?: BusinessHoursOptions<DateType>,
): NormalizedBusinessHoursOptions {
  const startOfDay = options?.startOfDay ?? "09:00";
  const endOfDay = options?.endOfDay ?? "17:00";
  const workingDays = options?.workingDays ?? [1, 2, 3, 4, 5]; // Mon-Fri
  const holidays = options?.holidays ?? [];

  const start = parseTimeString(startOfDay);
  const end = parseTimeString(endOfDay);

  // Validate that end is after start
  if (
    end.hours < start.hours ||
    (end.hours === start.hours && end.minutes <= start.minutes)
  ) {
    throw new RangeError(
      `End of day "${endOfDay}" must be after start of day "${startOfDay}"`,
    );
  }

  // Validate working days
  if (!Array.isArray(workingDays) || workingDays.length === 0) {
    throw new RangeError("workingDays must be a non-empty array");
  }

  for (const day of workingDays) {
    if (!Number.isInteger(day) || day < 0 || day > 6) {
      throw new RangeError(
        "workingDays must contain integers between 0 (Sunday) and 6 (Saturday)",
      );
    }
  }

  // Validate holidays is an array
  if (!Array.isArray(holidays)) {
    throw new TypeError("holidays must be an array");
  }

  return {
    startHour: start.hours,
    startMinute: start.minutes,
    endHour: end.hours,
    endMinute: end.minutes,
    workingDays,
    holidays,
  };
}

/**
 * Get the start of working hours for a given date.
 * Returns null if the date is not a working day.
 */
export function getWorkingHoursStart(
  date: Date,
  normalized: NormalizedBusinessHoursOptions,
  options?: ContextOptions<Date>,
): Date | null {
  if (
    !isWorkingDay(date, normalized.workingDays) ||
    isHoliday(date, normalized.holidays, options)
  ) {
    return null;
  }

  const result = new Date(date);
  result.setHours(normalized.startHour, normalized.startMinute, 0, 0);
  return result;
}

/**
 * Get the end of working hours for a given date.
 * Returns null if the date is not a working day.
 */
export function getWorkingHoursEnd(
  date: Date,
  normalized: NormalizedBusinessHoursOptions,
  options?: ContextOptions<Date>,
): Date | null {
  if (
    !isWorkingDay(date, normalized.workingDays) ||
    isHoliday(date, normalized.holidays, options)
  ) {
    return null;
  }

  const result = new Date(date);
  result.setHours(normalized.endHour, normalized.endMinute, 0, 0);
  return result;
}

/**
 * Get total business hours in a day (in milliseconds).
 */
export function getBusinessHoursPerDay(
  normalized: NormalizedBusinessHoursOptions,
): number {
  const startMs =
    normalized.startHour * 60 * 60 * 1000 + normalized.startMinute * 60 * 1000;
  const endMs =
    normalized.endHour * 60 * 60 * 1000 + normalized.endMinute * 60 * 1000;
  return endMs - startMs;
}
