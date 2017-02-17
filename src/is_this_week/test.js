// @flow
/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var isThisWeek = require('./')

describe('isThisWeek', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same week', function () {
    var date = new Date(2014, 8 /* Sep */, 21)
    assert(isThisWeek(date) === true)
  })

  it('returns false if the given date and the current date have different weeks', function () {
    var date = new Date(2014, 8 /* Sep */, 29)
    assert(isThisWeek(date) === false)
  })

  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8 /* Sep */, 28)
    assert(isThisWeek(date, {weekStartsOn: 1}) === true)
  })

  it('implicitly converts options', function () {
    var date = new Date(2014, 8 /* Sep */, 28)
    // $ExpectedMistake
    assert(isThisWeek(date, {weekStartsOn: '1'}) === true)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 21).toISOString()
    assert(isThisWeek(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 21).getTime()
    assert(isThisWeek(date) === true)
  })
})
