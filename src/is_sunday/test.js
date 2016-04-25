/* eslint-env mocha */

var assert = require('power-assert')
var isSunday = require('./')

describe('isSunday', function () {
  it('returns true if given date is Sunday', function () {
    var result = isSunday(new Date(2014, 8 /* Sep */, 21))
    assert(result === true)
  })

  it('returns false if given date is not Sunday', function () {
    var result = isSunday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts string', function () {
    var result = isSunday(new Date(2014, 6 /* Jul */, 6).toString())
    assert(result === true)
  })

  it('accepts timestamp', function () {
    var result = isSunday(new Date(2014, 1 /* Feb */, 9).getTime())
    assert(result === true)
  })
})

