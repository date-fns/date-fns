// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var isWednesday = require('./')

describe('isWednesday', function () {
  it('returns true if the given date is Wednesday', function () {
    var result = isWednesday(new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('returns false if the given date is not Wednesday', function () {
    var result = isWednesday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isWednesday(new Date(2014, 6 /* Jul */, 9).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isWednesday(new Date(2014, 1 /* Feb */, 12).getTime())
    assert(result === true)
  })
})
