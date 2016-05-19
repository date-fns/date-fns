// @flow
/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var isThisHour = require('./')

describe('isThisHour', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same hour', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18)
    assert(isThisHour(date) === true)
  })

  it('returns false if the given date and the current date have different hours', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 19)
    assert(isThisHour(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 59, 59, 999).toISOString()
    assert(isThisHour(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 45).getTime()
    assert(isThisHour(date) === true)
  })
})
