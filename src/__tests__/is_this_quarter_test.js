var assert = require('power-assert')
var isThisQuarter = require('../is_this_quarter')

describe('isThisQuarter', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if given date and current date have same quarter (and year)', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    assert(isThisQuarter(date) === true)
  })

  it('returns false if given date and current date have different quarters', function() {
    var date = new Date(2014, 1 /* Feb */, 11)
    assert(isThisQuarter(date) === false)
  })

  it('accepts string', function() {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    assert(isThisQuarter(date) === true)
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    assert(isThisQuarter(date) === true)
  })
})

