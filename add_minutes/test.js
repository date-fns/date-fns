var assert = require('power-assert')
var addMinutes = require('./')

describe('addMinutes', function() {
  it('adds given number of minutes', function() {
    var result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30))
  })

  it('accepts string', function() {
    var result = addMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).toISOString(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 20))
  })

  it('accepts timestamp', function() {
    var result = addMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 20))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 0)
    addMinutes(date, 25)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 0))
  })
})

