var assert = require('power-assert')
var addHours = require('../add_hours')

describe('addHours', function() {
  it('adds numbers of passed hours', function() {
    var result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('accepts string', function() {
    var result = addHours(
      new Date(2014, 6 /* Jul */, 10, 23, 0).toISOString(), 26
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 12, 1, 0))
  })

  it('accepts timestamp', function() {
    var result = addHours(
      new Date(2014, 6 /* Jul */, 10, 23, 0).getTime(), 26
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 12, 1, 0))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 23, 0)
    addHours(date, 10)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })
})

