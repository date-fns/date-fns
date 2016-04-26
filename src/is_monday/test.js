/* eslint-env mocha */

var assert = require('power-assert')
var isMonday = require('./')

describe('isMonday', function () {
  it('returns true if given date is Monday', function () {
    var result = isMonday(new Date(2014, 8 /* Sep */, 22))
    assert(result === true)
  })

  it('returns false if given date is not Monday', function () {
    var result = isMonday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts string', function () {
    var result = isMonday(new Date(2014, 6 /* Jul */, 7).toString())
    assert(result === true)
  })

  it('accepts timestamp', function () {
    var result = isMonday(new Date(2014, 1 /* Feb */, 10).getTime())
    assert(result === true)
  })
})

