import { addLeadingZeros } from "../addLeadingZeros/index.js";
import { setDefaultOptions } from "../defaultOptions/index.js";

export function assertType<T>(_: T): void {}

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
