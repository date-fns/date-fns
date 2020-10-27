// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getISODay from '.'

describe('getISODay', function() {
  it('returns the day of the ISO week of the given date', function() {
    const result = getISODay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('returns 7 if the given day is Sunday', function() {
    const result = getISODay(new Date(2014, 5 /* Jun */, 1))
    assert(result === 7)
  })

  it('accepts a timestamp', function() {
    const result = getISODay(new Date(2014, 5 /* Jun */, 1).getTime())
    assert(result === 7)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getISODay(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getISODay.bind(null), TypeError)
  })
})
