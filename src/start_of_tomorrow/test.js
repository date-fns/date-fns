/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var startOfTomorrow = require('./')

describe('startOfTomorrow', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns the start of tomorrow', function () {
    var result = startOfTomorrow()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 26))
  })
})

