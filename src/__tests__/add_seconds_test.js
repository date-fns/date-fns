var assert = require('power-assert')
var addSeconds = require('../add_seconds')

describe('addSeconds', function() {
  it('adds number of passed seconds', function() {
    var result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30))
  })

  it('accepts string', function() {
    var result = addSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).toISOString(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 20))
  })

  it('accepts timestamp', function() {
    var result = addSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 20))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0)
    addSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
  })
})

