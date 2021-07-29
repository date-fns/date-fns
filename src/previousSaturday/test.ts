// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import previousSaturday from '.'

describe('previousSaturday', function () {
  it('returns the following Saturday given various dates after the same', function () {
    assert.deepStrictEqual(
      previousSaturday(new Date(2021, 5 /* Jun */, 7)),
      new Date(2021, 5 /* Jun */, 5)
    )

    assert.deepStrictEqual(
      previousSaturday(new Date(2021, 5 /* Jun */, 8)),
      new Date(2021, 5 /* Jun */, 5)
    )

    assert.deepStrictEqual(
      previousSaturday(new Date(2021, 5 /* Jun */, 12)),
      new Date(2021, 5 /* Jun */, 5)
    )

    assert.deepStrictEqual(
      previousSaturday(new Date(2021, 5 /* Jun */, 16)),
      new Date(2021, 5 /* Jun */, 12)
    )

    assert.deepStrictEqual(
      previousSaturday(new Date(2021, 5 /* Jun */, 17)),
      new Date(2021, 5 /* Jun */, 12)
    )

    assert.deepStrictEqual(
      previousSaturday(new Date(2021, 5 /* Jun */, 24)),
      new Date(2021, 5 /* Jun */, 19)
    )

  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    assert(previousSaturday(new Date(NaN)) instanceof Date)
  })
})
