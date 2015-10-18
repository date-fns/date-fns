var assert = require('power-assert')
var startOfToday = require('../start_of_today')

describe('startOfToday', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns current date with time setted to 00:00:00', function() {
    var result = startOfToday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25))
  })
})

