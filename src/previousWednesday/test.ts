/* eslint-env mocha */

import assert from 'assert'
import previousWednesday from '.'

describe('previousWednesday', () => {
  it('returns the previous Wednesday given various dates after the same', () => {
    assert.deepStrictEqual(
      previousWednesday(new Date(2021, 5 /* Jun */, 5)),
      new Date(2021, 5 /* Jun */, 2)
    )

    assert.deepStrictEqual(
      previousWednesday(new Date(2021, 5 /* Jun */, 6)),
      new Date(2021, 5 /* Jun */, 2)
    )

    assert.deepStrictEqual(
      previousWednesday(new Date(2021, 5 /* Jun */, 9)),
      new Date(2021, 5 /* Jun */, 2)
    )

    assert.deepStrictEqual(
      previousWednesday(new Date(2021, 5 /* Jun */, 17)),
      new Date(2021, 5 /* Jun */, 16)
    )

    assert.deepStrictEqual(
      previousWednesday(new Date(2021, 5 /* Jun */, 18)),
      new Date(2021, 5 /* Jun */, 16)
    )

    assert.deepStrictEqual(
      previousWednesday(new Date(2021, 5 /* Jun */, 25)),
      new Date(2021, 5 /* Jun */, 23)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(previousWednesday(new Date(NaN)) instanceof Date)
  })
})
