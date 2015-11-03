var assert = require('power-assert')
var getDay = require('./')

describe('getDay', function() {
  it('returns day of week of given date', function() {
    var result = getDay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('accepts string', function() {
    var result = getDay(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === 3)
  })

  it('accepts timestamp', function() {
    var result = getDay(new Date(2014, 5 /* Jun */, 1).getTime())
    assert(result === 0)
  })
})

