/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var endOfTomorrow = require('./')

describe('endOfTomorrow', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns tomorrow with the time setted to 23:59:59.999', function () {
    var result = endOfTomorrow()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 26, 23, 59, 59, 999))
  })
})

