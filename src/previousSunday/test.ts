// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import previoursSunday from '.'

describe('previoursSunday', function () {
  it('returns the following Sunday given various dates after the same', function () {
    assert.deepStrictEqual(
      previoursSunday(new Date(2021, 5 /* Jun */, 7)),
      new Date(2021, 5 /* Jun */, 6)
    )

    assert.deepStrictEqual(
      previoursSunday(new Date(2021, 5 /* Jun */, 8)),
      new Date(2021, 5 /* Jun */, 6)
    )

    assert.deepStrictEqual(
      previoursSunday(new Date(2021, 5 /* Jun */, 13)),
      new Date(2021, 5 /* Jun */, 6)
    )

    assert.deepStrictEqual(
      previoursSunday(new Date(2021, 5 /* Jun */, 16)),
      new Date(2021, 5 /* Jun */, 13)
    )

    assert.deepStrictEqual(
      previoursSunday(new Date(2021, 5 /* Jun */, 17)),
      new Date(2021, 5 /* Jun */, 13)
    )

    assert.deepStrictEqual(
      previoursSunday(new Date(2021, 5 /* Jun */, 24)),
      new Date(2021, 5 /* Jun */, 20)
    )

  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    assert(previoursSunday(new Date(NaN)) instanceof Date)
  })
})
