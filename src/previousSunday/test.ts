/* eslint-env mocha */

import assert from 'assert'
import previousSunday from '.'

describe('previousSunday', () => {
  it('returns the previous Sunday given various dates after the same', () => {
    assert.deepStrictEqual(
      previousSunday(new Date(2021, 5 /* Jun */, 7)),
      new Date(2021, 5 /* Jun */, 6)
    )

    assert.deepStrictEqual(
      previousSunday(new Date(2021, 5 /* Jun */, 8)),
      new Date(2021, 5 /* Jun */, 6)
    )

    assert.deepStrictEqual(
      previousSunday(new Date(2021, 5 /* Jun */, 13)),
      new Date(2021, 5 /* Jun */, 6)
    )

    assert.deepStrictEqual(
      previousSunday(new Date(2021, 5 /* Jun */, 16)),
      new Date(2021, 5 /* Jun */, 13)
    )

    assert.deepStrictEqual(
      previousSunday(new Date(2021, 5 /* Jun */, 17)),
      new Date(2021, 5 /* Jun */, 13)
    )

    assert.deepStrictEqual(
      previousSunday(new Date(2021, 5 /* Jun */, 24)),
      new Date(2021, 5 /* Jun */, 20)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(previousSunday(new Date(NaN)) instanceof Date)
  })
})
