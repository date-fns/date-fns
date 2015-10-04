var assert = require('power-assert')
var isSameISOWeek = require('../is_same_iso_week')

describe('isSameISOWeek', function() {
  it('returns true if passed dates belongs to the same week', function() {
    var result = isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 7)
    )
    assert(result === true)
  })

  it('allows to pass string', function() {
    var result = isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).toISOString(),
      new Date(2014, 6 /* Jul */, 2).toISOString()
    )
    assert(result === true)
  })

  it('allows to pass timestamp', function() {
    var result = isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime()
    )
    assert(result === true)
  })
})

