// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextThursday from '.'

describe('nextThursday', () => {
  it('returns the following Thursday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextThursday(new Date(2020, 2 /* Mar */, 23)),
      new Date(2020, 2 /* Mar */, 26)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 2 /* Mar */, 22)),
      new Date(2020, 2 /* Mar */, 26)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 2 /* Mar */, 21)),
      new Date(2020, 2 /* Mar */, 26)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 2 /* Mar */, 20)),
      new Date(2020, 2 /* Mar */, 26)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 2 /* Mar */, 19)),
      new Date(2020, 2 /* Mar */, 26)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 2 /* Mar */, 18)),
      new Date(2020, 2 /* Mar */, 19)
    )

    assert.deepStrictEqual(
      nextThursday(new Date(2020, 2 /* Mar */, 17)),
      new Date(2020, 2 /* Mar */, 19)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextThursday(new Date(NaN)) instanceof Date)
  })
})
