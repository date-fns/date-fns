// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import previoursWednesday from '.'

describe('previoursWednesday', function () {
  it('returns the following Wednesday given various dates after the same', function () {
    assert.deepStrictEqual(
      previoursWednesday(new Date(2021, 5 /* Jun */, 5)),
      new Date(2021, 5 /* Jun */, 2)
    )

    assert.deepStrictEqual(
      previoursWednesday(new Date(2021, 5 /* Jun */, 6)),
      new Date(2021, 5 /* Jun */, 2)
    )

    assert.deepStrictEqual(
      previoursWednesday(new Date(2021, 5 /* Jun */, 9)),
      new Date(2021, 5 /* Jun */, 2)
    )

    assert.deepStrictEqual(
      previoursWednesday(new Date(2021, 5 /* Jun */, 17)),
      new Date(2021, 5 /* Jun */, 16)
    )

    assert.deepStrictEqual(
      previoursWednesday(new Date(2021, 5 /* Jun */, 18)),
      new Date(2021, 5 /* Jun */, 16)
    )

    assert.deepStrictEqual(
      previoursWednesday(new Date(2021, 5 /* Jun */, 25)),
      new Date(2021, 5 /* Jun */, 23)
    )

  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    assert(previoursWednesday(new Date(NaN)) instanceof Date)
  })
})
