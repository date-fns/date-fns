// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextMonday from '.'

describe('nextMonday', function () {
  it('returns the following Monday given various dates before the same', function () {
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

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 2 /* Mar */, 16)),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 2 /* Mar */, 22)),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextMonday(new Date(2020, 2 /* Mar */, 21)),
      new Date(2020, 2 /* Mar */, 23)
    )
  })
})
