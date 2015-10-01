var assert = require('power-assert')
var setMilliseconds = require('../set_milliseconds')

describe('setMilliseconds', function() {
  it('sets amount of milliseconds', function() {
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 300)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300))
  })

  it('accepts string', function() {
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 123)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 0, 123))
  })

  it('accepts timestamp', function() {
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(), 755)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    setMilliseconds(date, 137)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500))
  })
})

