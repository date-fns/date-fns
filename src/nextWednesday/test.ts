// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextWednesday from '.'

describe('nextWednesday', () => {
  it('returns the following Wednesday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 4 /* May */, 23)),
      new Date(2020, 4 /* May */, 27)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 4 /* May */, 22)),
      new Date(2020, 4 /* May */, 27)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 4 /* May */, 21)),
      new Date(2020, 4 /* May */, 27)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 4 /* May */, 20)),
      new Date(2020, 4 /* May */, 27)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 4 /* May */, 19)),
      new Date(2020, 4 /* May */, 20)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 4 /* May */, 18)),
      new Date(2020, 4 /* May */, 20)
    )

    assert.deepStrictEqual(
      nextWednesday(new Date(2020, 4 /* May */, 17)),
      new Date(2020, 4 /* May */, 20)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextWednesday(new Date(NaN)) instanceof Date)
  })
})
