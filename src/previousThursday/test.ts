/* eslint-env mocha */

import assert from 'assert'
import previousThursday from '.'

describe('previousThursday', () => {
  it('returns the previous Thursday given various dates after the same', () => {
    assert.deepStrictEqual(
      previousThursday(new Date(2021, 5 /* Jun */, 5)),
      new Date(2021, 5 /* Jun */, 3)
    )

    assert.deepStrictEqual(
      previousThursday(new Date(2021, 5 /* Jun */, 6)),
      new Date(2021, 5 /* Jun */, 3)
    )

    assert.deepStrictEqual(
      previousThursday(new Date(2021, 5 /* Jun */, 10)),
      new Date(2021, 5 /* Jun */, 3)
    )

    assert.deepStrictEqual(
      previousThursday(new Date(2021, 5 /* Jun */, 14)),
      new Date(2021, 5 /* Jun */, 10)
    )

    assert.deepStrictEqual(
      previousThursday(new Date(2021, 5 /* Jun */, 15)),
      new Date(2021, 5 /* Jun */, 10)
    )

    assert.deepStrictEqual(
      previousThursday(new Date(2021, 5 /* Jun */, 24)),
      new Date(2021, 5 /* Jun */, 17)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(previousThursday(new Date(NaN)) instanceof Date)
  })
})
