/* eslint-env mocha */

var assert = require('power-assert')
var isWeekend = require('./')

describe('isWeekend', function () {
  it('returns true if given date is in weekend', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5))
    assert(result === true)
  })

  it('returns false if given date is not weekend', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 6))
    assert(result === false)
  })

  it('accepts string', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5).toString())
    assert(result === true)
  })

  it('accepts timestamp', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5).getTime())
    assert(result === true)
  })
})

