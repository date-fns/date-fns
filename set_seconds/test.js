var assert = require('power-assert')
var setSeconds = require('./')

describe('setSeconds', function() {
  it('sets seconds', function() {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('accepts string', function() {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 18))
  })

  it('accepts timestamp', function() {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40)
    setSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
  })
})

