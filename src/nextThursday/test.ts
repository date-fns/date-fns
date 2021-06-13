// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextThursday from '.'

describe('nextThursday', () => {
  it('returns the following Thursday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextThursday(new Date(2020, 4 /* May */, 23)),
      new Date(2020, 4 /* May */, 28)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 4 /* May */, 22)),
      new Date(2020, 4 /* May */, 28)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 4 /* May */, 21)),
      new Date(2020, 4 /* May */, 28)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 4 /* May */, 20)),
      new Date(2020, 4 /* May */, 21)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 4 /* May */, 19)),
      new Date(2020, 4 /* May */, 21)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 4 /* May */, 18)),
      new Date(2020, 4 /* May */, 21)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 4 /* May */, 17)),
      new Date(2020, 4 /* May */, 21)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextThursday(new Date(NaN)) instanceof Date)
  })
})
