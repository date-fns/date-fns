// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextWednesday from '.'

describe('nextWednesday', () => {
  it('returns the following Wednesday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 2 /* Mar */, 23)),
      new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 2 /* Mar */, 22)),
      new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 2 /* Mar */, 21)),
      new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 2 /* Mar */, 20)),
      new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 2 /* Mar */, 19)),
      new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 2 /* Mar */, 18)),
      new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 2 /* Mar */, 17)),
      new Date(2020, 2 /* Mar */, 18)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextWednesday(new Date(NaN)) instanceof Date)
  })
})
