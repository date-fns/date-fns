/* eslint-env mocha */

var assert = require('power-assert')
var getISOWeek = require('./')

describe('getISOWeek', function () {
  it('returns the ISO week of the given date', function () {
    var result = getISOWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 53)
  })

  it('accepts a string', function () {
    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).toISOString())
    assert(result === 1)
  })

  it('accepts a timestamp', function () {
    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).getTime())
    assert(result === 1)
  })
})

