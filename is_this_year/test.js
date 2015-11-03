var assert = require('power-assert')
var isThisYear = require('./')

describe('isThisYear', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if given date and current date have same year', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    assert(isThisYear(date) === true)
  })

  it('returns false if given date and current date have different years', function() {
    var date = new Date(2015, 6 /* Jul */, 2)
    assert(isThisYear(date) === false)
  })

  it('accepts string', function() {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    assert(isThisYear(date) === true)
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    assert(isThisYear(date) === true)
  })
})

