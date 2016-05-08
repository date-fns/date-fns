/* eslint-env mocha */

var assert = require('power-assert')
var subQuarters = require('./')

describe('subQuarters', function () {
  it('subtracts the given number of quarters', function () {
    var result = subQuarters(new Date(2014, 8 /* Sep */, 1), 3)
    assert.deepEqual(result, new Date(2013, 11 /* Dec */, 1))
  })

  it('accepts a string', function () {
    var result = subQuarters(new Date(2014, 8 /* Sep */, 1).toISOString(), 4)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = subQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    subQuarters(date, 3)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = subQuarters(date, 1)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })
})

