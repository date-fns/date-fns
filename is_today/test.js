var assert = require('power-assert')
var isToday = require('./')

describe('isToday', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if given date is today', function() {
    var result = isToday(new Date(2014, 8 /* Sep */, 25))
    assert(result === true)
  })

  it('returns false if given date is not today', function() {
    var result = isToday(new Date(2014, 8 /* Sep */, 26))
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isToday(new Date(2014, 8 /* Sep */, 25).toString())
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isToday(new Date(2014, 8 /* Sep */, 25).getTime())
    assert(result === true)
  })
})

