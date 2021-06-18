// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import previoursThursday from '.'

describe('previoursThursday', function () {
  it('returns the following Thursday given various dates after the same', function () {
    assert.deepStrictEqual(
      previoursThursday(new Date(2021, 5 /* Jun */, 5)),
      new Date(2021, 5 /* Jun */, 3)
    )

    assert.deepStrictEqual(
      previoursThursday(new Date(2021, 5 /* Jun */, 6)),
      new Date(2021, 5 /* Jun */, 3)
    )

    assert.deepStrictEqual(
      previoursThursday(new Date(2021, 5 /* Jun */, 10)),
      new Date(2021, 5 /* Jun */, 3)
    )

    assert.deepStrictEqual(
      previoursThursday(new Date(2021, 5 /* Jun */, 14)),
      new Date(2021, 5 /* Jun */, 10)
    )

    assert.deepStrictEqual(
      previoursThursday(new Date(2021, 5 /* Jun */, 15)),
      new Date(2021, 5 /* Jun */, 10)
    )

    assert.deepStrictEqual(
      previoursThursday(new Date(2021, 5 /* Jun */, 24)),
      new Date(2021, 5 /* Jun */, 17)
    )

  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    assert(previoursThursday(new Date(NaN)) instanceof Date)
  })
})
