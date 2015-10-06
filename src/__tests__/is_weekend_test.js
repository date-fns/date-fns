var assert = require('power-assert')
var isWeekend = require('../is_weekend')

describe('isWeekend', function() {
  it('returns true if given date is in weekend', function() {
    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 5))
    assert(result === true)
  })

  it('returns false if given date is not weekend', function() {
    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 6))
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 5).toString())
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 5).getTime())
    assert(result === true)
  })
})

