Problem Description

The addDays utility is expected to return a new date that represents the input date shifted forward or backward by a given number of calendar days. While it behaves correctly for simple cases, it breaks down in several real-world scenarios involving date extensions, timezone contexts, and daylight saving time (DST).

When a date extension such as UTCDate or TZDate is passed as input, the returned value should be of the same date type. Currently, this guarantee is not consistently preserved. Similarly, when a timezone context is provided, the result should be created within that context rather than falling back to the system’s local timezone.

The function also behaves incorrectly around daylight saving time boundaries. Adding days should follow calendar-day semantics, not fixed hour offsets. Depending on the timezone, crossing a DST boundary may result in a 23-hour or 25-hour difference, and the function must handle these transitions correctly.

Another issue is unintended mutation. The original date object must never be modified. In particular, when the number of days to add is zero, the function should act as a true no-op and return a result without altering the original instance in any way.

Finally, invalid inputs must be handled consistently. If the input date is invalid, or if the number of days provided is not a valid numeric value, the function should return an invalid date result instead of producing undefined or inconsistent behavior.



Expected Behavior

The returned date preserves the original date type when date extensions are used.
Any provided timezone context is respected when constructing the result.
Adding days across DST boundaries produces correct calendar-day results.
The original date object is never mutated.
A zero-day increment results in no observable change.
Invalid inputs consistently return an invalid date.



Scope

The scope of this task is intentionally limited. Only the addDays function and its corresponding test coverage are affected. No other modules or unrelated behavior should be modified.



Difficulty Justification

This problem is moderately difficult because date and time bugs rarely fail loudly. Issues related to DST transitions, timezone contexts, and custom date types often surface only in specific environments and edge cases. Correct behavior requires careful handling of date construction and context propagation, along with deterministic tests that validate behavior across these boundary conditions.