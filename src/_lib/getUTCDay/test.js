// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getUTCDay from '.'

describe('getUTCDay', function() {
  it('returns day of the month for the given date', function() {
    var result = getUTCDay(new Date(Date.UTC(2019, 6 /* Jul */, 2)))
    assert(result === 2)
  })

  it('accepts a timestamp', function() {
    var result = getUTCDay(new Date(Date.UTC(2019, 0 /* Jan */, 2)).getTime())
    assert(result === 3)
  })

  it('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(0, 11 /* Dec */, 30)
    initialDate.setUTCHours(0, 0, 0, 0)
    var result = getUTCDay(initialDate)
    assert(result === 6)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getUTCDay(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getUTCDay.bind(null), TypeError)
  })
})
