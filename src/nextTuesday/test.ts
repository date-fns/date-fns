// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextTuesday from '.'

describe('nextTuesday', () => {
  it('returns the following Tuesday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextTuesday(new Date(2020, 2 /* Mar */, 23)),
      new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(new Date(2020, 2 /* Mar */, 22)),
      new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(new Date(2020, 3 /* Apr */, 11)),
      new Date(2020, 3 /* Apr */, 14)
    )

    assert.deepStrictEqual(
      nextTuesday(new Date(2020, 2 /* Mar */, 20)),
      new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(new Date(2020, 2 /* Mar */, 19)),
      new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(new Date(2020, 2 /* Mar */, 18)),
      new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(new Date(2020, 2 /* Mar */, 17)),
      new Date(2020, 2 /* Mar */, 24)
    )
  })
  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextTuesday(new Date(NaN)) instanceof Date)
  })
})
