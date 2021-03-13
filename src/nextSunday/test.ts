// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextSunday from '.'

describe('nextSunday', () => {
  it('returns the following Sunday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextSunday(new Date(2020, 2 /* Mar */, 23)),
      new Date(2020, 2 /* Mar */, 29)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 2 /* Mar */, 22)),
      new Date(2020, 2 /* Mar */, 29)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 2 /* Mar */, 21)),
      new Date(2020, 2 /* Mar */, 22)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 2 /* Mar */, 20)),
      new Date(2020, 2 /* Mar */, 22)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 2 /* Mar */, 19)),
      new Date(2020, 2 /* Mar */, 22)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 2 /* Mar */, 18)),
      new Date(2020, 2 /* Mar */, 22)
    )

    assert.deepStrictEqual(
      nextSunday(new Date(2020, 2 /* Mar */, 17)),
      new Date(2020, 2 /* Mar */, 22)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextSunday(new Date(NaN)) instanceof Date)
  })
})
