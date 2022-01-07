/* eslint-env mocha */

import assert from 'assert'
import previousSaturday from '.'

describe('previousSaturday', () => {
  it('returns the previous Saturday given various dates after the same', () => {
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

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(previousSaturday(new Date(NaN)) instanceof Date)
  })
})
