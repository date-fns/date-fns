// @flow
/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var endOfTomorrow = require('./')

describe('endOfTomorrow', function () {
  it('returns tomorrow with the time setted to 23:59:59.999', function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )

    var result = endOfTomorrow()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 26, 23, 59, 59, 999))

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
    expectedResult.setFullYear(14, 8 /* Sep */, 26)
    expectedResult.setHours(23, 59, 59, 999)
    var result = endOfTomorrow()
    assert.deepEqual(result, expectedResult)

    this.clock.restore()
  })
})
