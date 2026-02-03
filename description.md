# Problem: Strict timezone validation in parseISO

## Problem Brief
The `parseISO` function parses ISO-8601 date strings and returns a Date object. While it correctly supports many valid ISO formats, certain invalid timezone offsets can be accepted and produce a valid Date instead of Invalid Date.

Accepting malformed or out-of-range timezone offsets can silently normalize incorrect input and lead to data integrity issues in systems that rely on strict date validation and reliable timestamp parsing.

## Expected Behavior
When an ISO-8601 string contains an invalid timezone offset, `parseISO` must return Invalid Date. A timezone offset is invalid if it does not conform to a valid ISO-8601 offset format, or if its hour or minute components are outside allowed ranges.

All valid ISO-8601 strings must continue to parse correctly without regressions.

## Success Criteria
The behavior must be deterministic and verifiable via return values: invalid timezone inputs consistently yield Invalid Date and valid inputs yield correct Date values.
