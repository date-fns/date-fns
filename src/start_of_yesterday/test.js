/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var startOfYesterday = require('./')

describe('startOfYesterday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns the start of yesterday', function () {
    var result = startOfYesterday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 24))
  })
})

