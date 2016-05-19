// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var isDate = require('./')

describe('isDate', function () {
  it('returns true if the given argument is an instance of Date', function () {
    var result = isDate(new Date())
    assert(result === true)
  })

  it('returns true if the given argument is an invalid Date', function () {
    var result = isDate(new Date(''))
    assert(result === true)
  })

  it('returns false if the given argument is not an instance of Date', function () {
    var result = isDate(1404259200000)
    assert(result === false)
  })
})
