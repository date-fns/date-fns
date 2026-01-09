# VENUS Problem: parseISO should reject invalid timezone offsets

## Summary
The `parseISO` function should return `Invalid Date` when the input contains an invalid ISO-8601 timezone offset. Currently, some malformed timezone suffixes or out-of-range timezone values can be accepted and produce a valid `Date`, which may silently normalize incorrect user input and cause downstream data integrity issues.

## Expected behavior
For invalid timezone offsets, `parseISO` must return `Invalid Date` (i.e., `getTime()` is `NaN`). The behavior must be deterministic and verifiable via return values.

Timezone offsets should be considered invalid when:
- The timezone suffix does not match a valid ISO-8601 offset format (e.g., incomplete offsets).
- The hour component is outside the allowed range.
- The minute component is outside `0..59`.

Valid ISO strings must continue to parse correctly without regressions.

## Test plan
New deterministic tests are added to cover:
- Out-of-range timezone hour values (e.g., `+25:00`, `+99:00`).
- Invalid minute values (e.g., `+24:01`).
- Malformed timezone offsets (e.g., `+2`, `+2360`).

Base tests must continue to pass, and the new tests must fail on the unpatched version and pass after the fix.
