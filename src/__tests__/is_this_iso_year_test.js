var assert = require('power-assert')
var isThisISOYear = require('../is_this_iso_year')

describe('isThisISOYear', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if given date and current date have same ISO year', function() {
    var date = new Date(2013, 11 /* Dec */, 30)
    assert(isThisISOYear(date) === true)
  })

  it('returns false if given date and current date have different ISO years', function() {
    var date = new Date(2014, 11 /* Dec */, 29)
    assert(isThisISOYear(date) === false)
  })

  it('accepts string', function() {
    var date = new Date(2014, 11 /* Dec */, 28).toISOString()
    assert(isThisISOYear(date) === true)
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 1).getTime()
    assert(isThisISOYear(date) === true)
  })
})

