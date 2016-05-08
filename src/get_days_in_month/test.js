/* eslint-env mocha */

var assert = require('power-assert')
var getDaysInMonth = require('./')

describe('getDaysInMonth', function () {
  it('returns the number of days in the month of the given date', function () {
    var result = getDaysInMonth(new Date(2100, 1 /* Feb */, 11))
    assert(result === 28)
  })

  it('works for the February of a leap year', function () {
    var result = getDaysInMonth(new Date(2000, 1 /* Feb */, 11))
    assert(result === 29)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    var result = getDaysInMonth(date)
    assert(result === 31)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = getDaysInMonth(date)
    assert(result === 31)
  })
})

