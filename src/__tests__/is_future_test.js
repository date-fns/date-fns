var assert = require('power-assert')
var isFuture = require('../is_future')

describe('isFuture', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if passed date is future', function() {
    var result = isFuture(new Date(2014, 9 /* Oct */, 31))
    assert(result === true)
  })

  it('returns false if passed date is past', function() {
    var result = isFuture(new Date(2014, 8 /* Sep */, 1))
    assert(result === false)
  })

  it('returns false if passed date is current date', function() {
    var result = isFuture(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('allows to pass string', function() {
    var result = isFuture(new Date(2014, 9 /* Oct */, 31).toISOString())
    assert(result === true)
  })

  it('allows to pass timestamp', function() {
    var result = isFuture(new Date(2014, 9 /* Oct */, 31).getTime())
    assert(result === true)
  })
})

