/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var isYesterday = require('./')

describe('isYesterday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Aug */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if given date is yesterday', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('returns false if given date is not yesterday', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts string', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 24).toString())
    assert(result === true)
  })

  it('accepts timestamp', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 24).getTime())
    assert(result === true)
  })
})

