/* eslint-env mocha */

var assert = require('power-assert')
var getDaysInMonth = require('./')

describe('getDaysInMonth', function () {
  it('returns number of days in month of given date', function () {
    var result = getDaysInMonth(new Date(2100, 1 /* Feb */, 11))
    assert(result === 28)
  })

  it('works for February of leap year', function () {
    var result = getDaysInMonth(new Date(2000, 1 /* Feb */, 11))
    assert(result === 29)
  })

  it('accepts string', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    var result = getDaysInMonth(date)
    assert(result === 31)
  })

  it('accepts timestamp', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = getDaysInMonth(date)
    assert(result === 31)
  })
})

