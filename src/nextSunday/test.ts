// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextSunday from '.'

describe('nextSunday', () => {
  it('returns the following Sunday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextSunday(new Date(2020, 4 /* May */, 23)),
      new Date(2020, 4 /* May */, 24)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 4 /* May */, 22)),
      new Date(2020, 4 /* May */, 24)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 4 /* May */, 21)),
      new Date(2020, 4 /* May */, 24)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 4 /* May */, 20)),
      new Date(2020, 4 /* May */, 24)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 4 /* May */, 19)),
      new Date(2020, 4 /* May */, 24)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 4 /* May */, 18)),
      new Date(2020, 4 /* May */, 24)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 4 /* May */, 17)),
      new Date(2020, 4 /* May */, 24)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextSunday(new Date(NaN)) instanceof Date)
  })
})
