var assert = require('power-assert')
var isTomorrow = require('./')

describe('isTomorrow', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Aug */, 25).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if given date is tomorrow', function() {
    var result = isTomorrow(new Date(2014, 8 /* Sep */, 26))
    assert(result === true)
  })

  it('returns false if given date is not tomorrow', function() {
    var result = isTomorrow(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isTomorrow(new Date(2014, 8 /* Sep */, 26).toString())
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isTomorrow(new Date(2014, 8 /* Sep */, 26).getTime())
    assert(result === true)
  })
})

