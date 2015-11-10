var assert = require('power-assert')
var isPast = require('./')

describe('isPast', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if given date is in past', function() {
    var result = isPast(new Date(2014, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('returns false if given date is in future', function() {
    var result = isPast(new Date(2014, 11 /* Dec */, 31))
    assert(result === false)
  })

  it('returns false if given date is current date', function() {
    var result = isPast(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isPast(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isPast(new Date(2014, 6 /* Jul */, 2).getTime())
    assert(result === true)
  })
})

