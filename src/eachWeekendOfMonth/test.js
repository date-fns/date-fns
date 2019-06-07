// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachWeekendOfMonth from '.'

describe('eachWeekendOfMonth', () => {
  it('returns all weekends of the given month', () => {
    var result = eachWeekendOfMonth(new Date(2022, 1, 20))
    assert.deepEqual(result, [
      new Date(2022, 1, 5),
      new Date(2022, 1, 6),
      new Date(2022, 1, 12),
      new Date(2022, 1, 13),
      new Date(2022, 1, 19),
      new Date(2022, 1, 20),
      new Date(2022, 1, 26),
      new Date(2022, 1, 27)
    ])
  })

  it('throws TypeError exception when passed less than 1 argument', () => {
    assert.throws(eachWeekendOfMonth.bind(null), TypeError)
  })

  it('throws RangeError when the expected year is an invalid date', () => {
    assert.throws(eachWeekendOfMonth.bind(1, NaN), RangeError)
  })
})
