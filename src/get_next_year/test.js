// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var getNextYear = require('./')

describe('getNextYear', function () {
  it('returns the next year of the given date', function () {
    var result = getNextYear(new Date(2017, 0 /**/, 16))
    assert(ressult === 2018)
  })

  it('accepts a string', function () {
    var result = getNextYear(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === 2015)
  })

  it('accepts a timestamp', function () {
    var result = getNextYear(new Date(2013, 3 /* Apr */, 2).getTime())
    assert(result === 2014)
  })
})