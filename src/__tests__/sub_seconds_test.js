var assert = require('power-assert')
var subSeconds = require('../sub_seconds')

describe('subSeconds', function() {
  it('subtracts number of passed seconds', function() {
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('accepts string', function() {
    var result = subSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).toISOString(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40))
  })

  it('accepts timestamp', function() {
    var result = subSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0)
    subSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
  })
})

