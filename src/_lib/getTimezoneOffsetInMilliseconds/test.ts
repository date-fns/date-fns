// @flow
/* eslint-env mocha */

import assert from 'assert'
import getTimezoneOffsetInMilliseconds from '.'

describe('getTimezoneOffsetInMilliseconds', function() {
  it('works for a modern date', function() {
    const date = new Date(2018, 0 /* Jan */, 1, 12, 34, 56, 789)
    const result = date.getTime() - getTimezoneOffsetInMilliseconds(date)
    const expectedResult = Date.UTC(2018, 0 /* Jan */, 1, 12, 34, 56, 789)
    assert(result === expectedResult)
  })

  it('works for a date before standardized timezones', function() {
    const date = new Date(1800, 0 /* Jan */, 1, 12, 34, 56, 789)
    const result = date.getTime() - getTimezoneOffsetInMilliseconds(date)
    const expectedResult = Date.UTC(1800, 0 /* Jan */, 1, 12, 34, 56, 789)
    assert(result === expectedResult)
  })

  it('works for a date BC', function() {
    const date = new Date(-500, 0 /* Jan */, 1, 12, 34, 56, 789)
    const result = date.getTime() - getTimezoneOffsetInMilliseconds(date)
    const expectedResult = Date.UTC(-500, 0 /* Jan */, 1, 12, 34, 56, 789)
    assert(result === expectedResult)
  })
})
