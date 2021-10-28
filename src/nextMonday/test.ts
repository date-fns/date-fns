// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextMonday from '.'

describe('nextMonday', () => {
  it('returns the following Monday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextMonday(new Date(2020, 2 /* Mar */, 23)),
      new Date(2020, 2 /* Mar */, 30)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 2 /* Mar */, 22)),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 3 /* Apr */, 11)),
      new Date(2020, 3 /* Apr */, 13)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 2 /* Mar */, 20)),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 2 /* Mar */, 19)),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 2 /* Mar */, 18)),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 2 /* Mar */, 17)),
      new Date(2020, 2 /* Mar */, 23)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextMonday(new Date(NaN)) instanceof Date)
  })
})
