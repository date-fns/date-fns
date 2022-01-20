/* eslint-env mocha */

import assert from 'assert'
import previousFriday from '.'

describe('previousFriday', () => {
  it('returns the previous Friday given various dates after the same', () => {
    assert.deepStrictEqual(
      previousFriday(new Date(2021, 5 /* Jun */, 5)),
      new Date(2021, 5 /* Jun */, 4)
    )

    assert.deepStrictEqual(
      previousFriday(new Date(2021, 5 /* Jun */, 6)),
      new Date(2021, 5 /* Jun */, 4)
    )

    assert.deepStrictEqual(
      previousFriday(new Date(2021, 5 /* Jun */, 11)),
      new Date(2021, 5 /* Jun */, 4)
    )

    assert.deepStrictEqual(
      previousFriday(new Date(2021, 5 /* Jun */, 14)),
      new Date(2021, 5 /* Jun */, 11)
    )

    assert.deepStrictEqual(
      previousFriday(new Date(2021, 5 /* Jun */, 15)),
      new Date(2021, 5 /* Jun */, 11)
    )

    assert.deepStrictEqual(
      previousFriday(new Date(2021, 5 /* Jun */, 24)),
      new Date(2021, 5 /* Jun */, 18)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(previousFriday(new Date(NaN)) instanceof Date)
  })
})
