// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextFriday from '.'

describe('nextFriday', () => {
  it('returns the following Friday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextFriday(new Date(2020, 2 /* Mar */, 23)),
      new Date(2020, 2 /* Mar */, 27)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 2 /* Mar */, 22)),
      new Date(2020, 2 /* Mar */, 27)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 2 /* Mar */, 21)),
      new Date(2020, 2 /* Mar */, 27)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 2 /* Mar */, 20)),
      new Date(2020, 2 /* Mar */, 27)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 2 /* Mar */, 19)),
      new Date(2020, 2 /* Mar */, 20)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 2 /* Mar */, 18)),
      new Date(2020, 2 /* Mar */, 20)
    )

    assert.deepStrictEqual(
      nextFriday(new Date(2020, 2 /* Mar */, 17)),
      new Date(2020, 2 /* Mar */, 20)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextFriday(new Date(NaN)) instanceof Date)
  })
})
