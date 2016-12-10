// @flow
/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var isSoLastWeek = require('./')

describe('isSoLastWeek', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date is so last week', function () {
    var date = new Date(2014, 8 /* Sep */, 18)
    assert(isSoLastWeek(date) === true)
  })

  it('returns false if the given date is totally this week', function () {
    var date = new Date(2014, 8 /* Sep */, 24)
    assert(isSoLastWeek(date) === false)
  })

  it('returns false if the given date is so beyond last week', function () {
    var date = new Date(2013, 7 /* Aug */, 31)
    assert(isSoLastWeek(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 18).toISOString()
    assert(isSoLastWeek(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 18).getTime()
    assert(isSoLastWeek(date) === true)
  })
})
