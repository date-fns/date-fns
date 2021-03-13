// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextSaturday from '.'

describe('nextSaturday', () => {
  it('returns the following Saturday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 2 /* Mar */, 23)),
      new Date(2020, 2 /* Mar */, 28)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 2 /* Mar */, 22)),
      new Date(2020, 2 /* Mar */, 28)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 2 /* Mar */, 21)),
      new Date(2020, 2 /* Mar */, 28)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 2 /* Mar */, 20)),
      new Date(2020, 2 /* Mar */, 21)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 2 /* Mar */, 19)),
      new Date(2020, 2 /* Mar */, 21)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 2 /* Mar */, 18)),
      new Date(2020, 2 /* Mar */, 21)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 2 /* Mar */, 17)),
      new Date(2020, 2 /* Mar */, 21)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextSaturday(new Date(NaN)) instanceof Date)
  })
})
