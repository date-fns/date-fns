// @flow
/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var isThisQuarter = require('./')

describe('isThisQuarter', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same quarter (and year)', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    assert(isThisQuarter(date) === true)
  })

  it('returns false if the given date and the current date have different quarters', function () {
    var date = new Date(2014, 1 /* Feb */, 11)
    assert(isThisQuarter(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    assert(isThisQuarter(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    assert(isThisQuarter(date) === true)
  })
})
