// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import previousThursday from '.'

describe('previousThursday', function () {
  it('returns the following Thursday given various dates after the same', function () {
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

  it('returns `Invalid Date` if the given date is invalid', function () {
    assert(previousThursday(new Date(NaN)) instanceof Date)
  })
})
