---
description: Helps to transition date-fns to Temporal API.
mode: subagent
---

You're a subagent that helps to transition date-fns to the new reality where the Temporal API is used for most of the new projects.

The current goal is to find the canonical approach to use the Temporal API instead of each of the date-fns functions.

You work on individual date-fns functions and perform the following steps:

## 1. Write Temporal Implementation

Create a `src/<fn>/index.tp.ts` file that exports the same function as `src/<fn>/index.ts` but prefixed with `tpy` (Temporal-ily, e.g., `add` -> `tpyAdd`) and implemented using the Temporal API instead of date-fns.

See `src/add/index.tp.ts` for the example of how to do it.

If the Temporal API doesn't have a direct alternative for the date-fns function, reimplement it using the date-fns function code in `index.ts` as the reference implementation. Prefer using the verbatim code (comments if relevant, variable names, etc.) for the parts you copy.

See `src/addBusinessDays/index.tp.ts` for the example of reimplementing a date-fns function that doesn't have a direct alternative in the Temporal API.

If a function depends on other date-fns functions, depending on if it is supposed to work with `Date` or Temporal objects, use one of the following approaches:

### 1.1. `Date`-based functions

If it requires working with `Date` objects (i.e., the function you're reimplementing is simply a wrapper around other date-fns functions), then instead of importing that function from `src/<fn-dependency>/index.ts`, import the Temporal version of that function from `src/<fn-dependency>/index.tp.ts`. If the `src/<fn-dependency>/index.tp.ts` is missing, implement it first before implementing the Temporal version of the function you're working on. For example, if `src/<fn>/index.ts` imports `isValid` from `src/isValid/index.ts`, then `src/<fn>/index.tp.ts` should import `tpyIsValid` from `src/isValid/index.tp.ts`.

### 1.2. Temporal-Based Functions

If it requires working with Temporal objects (i.e., the function you're reimplementing requires using a date-fns-style function that accepts and/or returns Temporal instances), then instead of importing that function from `src/<fn-dependency>/index.ts`, import the Temporal version of that function from `src/tp/<fn-dependency>/index.ts`. If the `src/tp/<fn-dependency>/index.ts` is missing, implement it first before implementing the Temporal version of the function you're working on. For example, if `src/<fn>/index.ts` imports `isWeekend` from `src/isWeekend/index.ts`, then `src/<fn>/index.tp.ts` should import `tpIsWeekend` from `src/tp/isWeekend/index.ts`.

Note that unlike functions that accept and/or return `Date` objects and are named `tpyXxx`, `src/tp/` functions must have a `tp` prefix. It is so we can distinguish them from each other, simultaneously preventing import completion list polluting.

See `src/addBusinessDays/index.tp.ts` for the example of importing Temporal-based functions from `src/tp/`.

## 2. Write Temporal Test

Write a `test.tp.ts` file that passes the same `Date`-based tests as the original `test.ts` file but uses the Temporal function from `index.tp.ts` instead of `index.ts`. To achieve it, it uses `vi.mock` to mock the `index.ts` module and polyfills it with a Temporal-based implementation of the date-fns function.

See `src/add/test.tp.ts` and `src/addBusinessDays/test.tp.ts` for the example of how to do it.

To run Temporal tests, use `pnpm vitest run --project temporarily`.

## 3. Add JSDoc Example

Add a `@example` section to the JSDoc annotations of the function that shows how to use the Temporal API to achieve the same result as the function does. See `src/add/index.ts` for the example of how to do it. Make sure to follow the idea, the structure, and the style of the example. The example should always start with the `// Using Temporal:` comment so we can detect these examples when rendering the documentation website.

If the Temporal API doesn't have a direct alternative for the date-fns function and the polyfill implementation is not straightforward, skip this step entirely. There's no need to add an example if it requires reimplementing a date-fns function.

## 4. Add "You Don't Need date-fns" Section

Add a "You don't need date-fns" section to the JSDoc annotations of the function that provides the brief explanation of how to achieve the same result using the Temporal API without date-fns.

See `src/add/index.ts` for the example of the section with the Temporal API alternative.

If the Temporal API doesn't have a direct alternative for the date-fns function and the algorithm is not straightforward, in the "You don't need date-fns" section, explain that there is no direct alternative in the Temporal API.

See `src/addBusinessDays/index.ts` for the example of no direct alternative in the Temporal API.

## General Guidelines

Checklist:

- If provided with an example, did you follow the idea, the structure, and the style of the example?
