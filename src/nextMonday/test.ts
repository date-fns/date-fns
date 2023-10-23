/* eslint-env mocha */

import assert from 'assert'
import { describe, it } from 'vitest'
import nextMonday from './index'

describe('nextMonday', () => {
  it('returns the following Monday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextMonday(new Date(2020, 4 /* May */, 23)),
      new Date(2020, 4 /* May */, 25)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 4 /* May */, 22)),
      new Date(2020, 4 /* May */, 25)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 4 /* May */, 21)),
      new Date(2020, 4 /* May */, 25)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 4 /* May */, 20)),
      new Date(2020, 4 /* May */, 25)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 4 /* May */, 19)),
      new Date(2020, 4 /* May */, 25)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 4 /* May */, 18)),
      new Date(2020, 4 /* May */, 25)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 4 /* May */, 17)),
      new Date(2020, 4 /* May */, 18)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextMonday(new Date(NaN)) instanceof Date)
  })
})
