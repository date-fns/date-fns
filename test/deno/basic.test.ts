import {
  assertEquals,
  assertStrictEquals,
} from 'https://deno.land/std@0.100.0/testing/asserts.ts'
import addDaysAlt from '../../deno/addDays/index.ts'
import * as fp from '../../deno/fp/index.ts'
import * as esm from '../../deno/index.ts'
import { addDays } from '../../deno/index.ts'
import * as locales from '../../deno/locale/index.ts'

// Bare-bones tests for the Deno package export. Run `./scripts/build/deno.sh` first.
// Bulk importing the whole library allows the compiler to run checks.

// The few assertions below just confirms that things look usable, and that different import styles work as intended.
Deno.test('add a day (esm)', () => {
  const date = new Date(Date.UTC(2021, 0, 1))

  const result1 = addDays(date, 1)
  const result2 = esm.addDays(date, 1)
  const result3 = addDaysAlt(date, 1)

  const expected = '2021-01-02T00:00:00.000Z'
  assertStrictEquals(result1.toISOString(), expected)
  assertStrictEquals(result2.toISOString(), expected)
  assertStrictEquals(result3.toISOString(), expected)
})

Deno.test('add five years (fp)', () => {
  const addFiveYears = fp.addYears(5)
  const dates = [
    new Date(Date.UTC(1990, 0, 1)),
    new Date(Date.UTC(2009, 3, 15)),
  ]

  // NOTE: casting required since fp functions are untyped without typings.d.ts for now
  const results = dates.map(addFiveYears).map((d) => (d as Date).toISOString())

  assertEquals(results, [
    '1995-01-01T00:00:00.000Z',
    '2014-04-15T00:00:00.000Z',
  ])
})

Deno.test('enUS locale exists', () => {
  assertStrictEquals(locales['enUS'].code, 'en-US')
})
