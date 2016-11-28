// @flow
/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var endOfYesterday = require('./')

describe('endOfYesterday', function () {
  it('returns yesterday with the time setted to 23:59:59.999', function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )

    var result = endOfYesterday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 24, 23, 59, 59, 999))

    this.clock.restore()
  })

  it('handles dates before 100 AD', function () {
    var now = new Date(0)
    now.setFullYear(14, 8 /* Sep */, 25)
    now.setHours(14, 30, 45, 500)
    this.clock = sinon.useFakeTimers(
      now.getTime()
    )

    var expectedResult = new Date(0)
    expectedResult.setFullYear(14, 8 /* Sep */, 24)
    expectedResult.setHours(23, 59, 59, 999)
    var result = endOfYesterday()
    assert.deepEqual(result, expectedResult)

    this.clock.restore()
  })
})
