var assert = require('power-assert')
var isThisMinute = require('../is_this_minute')

describe('isThisMinute', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if given date and current date have same minute', function() {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30)
    assert(isThisMinute(date) === true)
  })

  it('returns false if given date and current date have different minutes', function() {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 31)
    assert(isThisMinute(date) === false)
  })

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 59, 999).toISOString()
    assert(isThisMinute(date) === true)
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 30).getTime()
    assert(isThisMinute(date) === true)
  })
})

