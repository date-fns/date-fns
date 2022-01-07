/* eslint-env mocha */

import assert from 'assert'
import getTimezoneOffsetInMilliseconds from '.'

describe('getTimezoneOffsetInMilliseconds', () => {
  it('works for a modern date', () => {
    var date = new Date(2018, 0 /* Jan */, 1, 12, 34, 56, 789)
    var result = date.getTime() - getTimezoneOffsetInMilliseconds(date)
    var expectedResult = Date.UTC(2018, 0 /* Jan */, 1, 12, 34, 56, 789)
    assert(result === expectedResult)
  })

  it('works for a date before standardized timezones', () => {
    var date = new Date(1800, 0 /* Jan */, 1, 12, 34, 56, 789)
    var result = date.getTime() - getTimezoneOffsetInMilliseconds(date)
    var expectedResult = Date.UTC(1800, 0 /* Jan */, 1, 12, 34, 56, 789)
    assert(result === expectedResult)
  })

  it('works for a date BC', () => {
    var date = new Date(-500, 0 /* Jan */, 1, 12, 34, 56, 789)
    var result = date.getTime() - getTimezoneOffsetInMilliseconds(date)
    var expectedResult = Date.UTC(-500, 0 /* Jan */, 1, 12, 34, 56, 789)
    assert(result === expectedResult)
  })
})
