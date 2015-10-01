var assert = require('power-assert')
var setDay = require('../set_day')

describe('setDay', function() {
  it('sets day of week', function() {
    var result = setDay(new Date(2014, 8 /* Sep */, 1), 0)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('allows to specify when week starts', function() {
    var result = setDay(new Date(2014, 8 /* Sep */, 1), 0, 1)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('sets days of other week if day index is less than 0 or more than 6', function() {
    var result = setDay(new Date(2014, 8 /* Sep */, 1), 8)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8))
  })

  it('accepts string', function() {
    var result = setDay(new Date(2014, 8 /* Sep */, 1).toISOString(), 5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 5))
  })

  it('accepts timestamp', function() {
    var result = setDay(new Date(2014, 8 /* Sep */, 1).getTime(), 3)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 3))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    setDay(date, 3)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

