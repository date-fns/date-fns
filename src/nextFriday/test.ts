// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextFriday from '.'

describe('nextFriday', () => {
  it('returns the following Friday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextFriday(new Date(2020, 4 /* May */, 23)),
      new Date(2020, 4 /* May */, 29)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 4 /* May */, 22)),
      new Date(2020, 4 /* May */, 29)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 4 /* May */, 21)),
      new Date(2020, 4 /* May */, 22)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 4 /* May */, 20)),
      new Date(2020, 4 /* May */, 22)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 4 /* May */, 19)),
      new Date(2020, 4 /* May */, 22)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 4 /* May */, 18)),
      new Date(2020, 4 /* May */, 22)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 4 /* May */, 17)),
      new Date(2020, 4 /* May */, 22)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextFriday(new Date(NaN)) instanceof Date)
  })
})
