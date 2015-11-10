var assert = require('power-assert')
var isThisWeek = require('./')

describe('isThisWeek', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if given date and current date have same week', function() {
    var date = new Date(2014, 8 /* Sep */, 21)
    assert(isThisWeek(date) === true)
  })

  it('returns false if given date and current date have different weeks', function() {
    var date = new Date(2014, 8 /* Sep */, 29)
    assert(isThisWeek(date) === false)
  })

  it('allows to specify when week starts', function() {
    var date = new Date(2014, 8 /* Sep */, 28)
    assert(isThisWeek(date, {weekStartsAt: 1}) === true)
  })

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 21).toISOString()
    assert(isThisWeek(date) === true)
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 21).getTime()
    assert(isThisWeek(date) === true)
  })
})

