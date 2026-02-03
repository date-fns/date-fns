# Problem Rationale

This problem targets strict ISO-8601 timezone validation in a widely used date utility library. Timezone parsing is a frequent source of subtle production bugs because invalid offsets may be introduced by user input, logs, or external systems.

Difficulty is rated Medium because solving it requires understanding ISO-8601 timezone rules, identifying edge cases, and implementing validation in a way that preserves existing behavior for valid inputs.

The scope is intentionally well-bounded to a small portion of the parsing logic and corresponding tests, reflecting real engineering work without requiring repo-wide changes.
