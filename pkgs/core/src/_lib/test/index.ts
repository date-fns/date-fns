import { afterEach, beforeEach, vi } from "vitest";
import { addLeadingZeros } from "../addLeadingZeros/index.ts";
import { setDefaultOptions } from "../defaultOptions/index.ts";

export function assertType<Type>(_value: Type) {}

export namespace assertType {
  export type Equal<T, U> =
    Exclude<T, U> extends never
      ? Exclude<U, T> extends never
        ? true
        : false
      : false;
}

export function resetDefaultOptions(): void {
  setDefaultOptions({});
}

// This makes sure we create the consistent offsets across timezones, no matter where these tests are ran.
export function generateOffset(originalDate: Date) {
  // Add the timezone.
  let offset = "";
  const tzOffset = originalDate.getTimezoneOffset();

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

  return offset;
}

export function fakeDate(date: number | Date) {
  function fakeNow(date: number | Date) {
    vi.setSystemTime(date);
  }

  beforeEach(() => {
    vi.useFakeTimers({ now: date });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  return { fakeNow };
}
