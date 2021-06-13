// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextSaturday from '.'

describe('nextSaturday', () => {
  it('returns the following Saturday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 4 /* May */, 23)),
      new Date(2020, 4 /* May */, 30)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 4 /* May */, 22)),
      new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 4 /* May */, 21)),
      new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 4 /* May */, 20)),
      new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 4 /* May */, 19)),
      new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 4 /* May */, 18)),
      new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(new Date(2020, 4 /* May */, 17)),
      new Date(2020, 4 /* May */, 23)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextSaturday(new Date(NaN)) instanceof Date)
  })
})
