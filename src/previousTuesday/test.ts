// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import previoursTuesday from '.'

describe('previoursTuesday', function () {
  it('returns the following Tuesday given various dates after the same', function () {
    assert.deepStrictEqual(
      previoursTuesday(new Date(2021, 5 /* Jun */, 5)),
      new Date(2021, 5 /* Jun */, 1)
    )

    assert.deepStrictEqual(
      previoursTuesday(new Date(2021, 5 /* Jun */, 6)),
      new Date(2021, 5 /* Jun */, 1)
    )

    assert.deepStrictEqual(
      previoursTuesday(new Date(2021, 5 /* Jun */, 8)),
      new Date(2021, 5 /* Jun */, 1)
    )

    assert.deepStrictEqual(
      previoursTuesday(new Date(2021, 5 /* Jun */, 15)),
      new Date(2021, 5 /* Jun */, 8)
    )

    assert.deepStrictEqual(
      previoursTuesday(new Date(2021, 5 /* Jun */, 17)),
      new Date(2021, 5 /* Jun */, 15)
    )

    assert.deepStrictEqual(
      previoursTuesday(new Date(2021, 5 /* Jun */, 18)),
      new Date(2021, 5 /* Jun */, 15)
    )

  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    assert(previoursTuesday(new Date(NaN)) instanceof Date)
  })
})
