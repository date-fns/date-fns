# parseISO: reject invalid calendar dates

## Problem

The `parseISO` utility parses ISO-8601 date strings into JavaScript `Date` objects.
While valid dates are handled correctly, some invalid calendar dates are currently
accepted and silently normalized by the JavaScript `Date` constructor.

For example, inputs such as February 31st or April 31st return a valid `Date`
instance instead of being treated as invalid. This can result in incorrect data
being passed through systems that rely on strict date validation.

The goal of this task is to ensure that `parseISO` rejects invalid calendar dates
while preserving existing behavior for all valid inputs.

## Expected behavior

- Valid ISO-8601 date strings must continue to return a valid `Date` object.
- Date strings representing invalid calendar dates must return `Invalid Date`.
- Leap year rules must be respected (e.g. February 29th is valid only in leap years).
- Timezone offsets and time components must remain unaffected.
- The function must not throw exceptions for invalid input.

## Examples of invalid input

- `2023-02-31`
- `2021-04-31`
- `2019-02-29`

## Success criteria

- Existing tests continue to pass unchanged.
- New tests fail on the base commit.
- New tests pass once the issue is correctly fixed.
