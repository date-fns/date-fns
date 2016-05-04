/* eslint-env mocha */

var assert = require('power-assert')
var getDayOfYear = require('./')

describe('getDayOfYear', function () {
  it('returns the day of the year of the given date', function () {
    var result = getDayOfYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 183)
  })

  it('accepts a string', function () {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).toISOString())
    assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).getTime())
    assert(result === 2)
  })
})

