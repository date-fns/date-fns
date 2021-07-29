// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import previousMonday from '.'

describe('previousMonday', function () {
  it('returns the following Monday given various dates after the same', function () {
    assert.deepStrictEqual(
      previousMonday(new Date(2021, 5 /* Jun */, 5)),
      new Date(2021, 4 /* May */, 31)
    )

    assert.deepStrictEqual(
      previousMonday(new Date(2021, 5 /* Jun */, 6)),
      new Date(2021, 4 /* May */, 31)
    )

    assert.deepStrictEqual(
      previousMonday(new Date(2021, 5 /* Jun */, 7)),
      new Date(2021, 4 /* May */, 31)
    )

    assert.deepStrictEqual(
      previousMonday(new Date(2021, 5 /* Jun */, 14)),
      new Date(2021, 5 /* Jun */, 7)
    )

    assert.deepStrictEqual(
      previousMonday(new Date(2021, 5 /* Jun */, 15)),
      new Date(2021, 5 /* Jun */, 14)
    )

    assert.deepStrictEqual(
      previousMonday(new Date(2021, 5 /* Jun */, 16)),
      new Date(2021, 5 /* Jun */, 14)
    )

  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    assert(previousMonday(new Date(NaN)) instanceof Date)
  })
})
