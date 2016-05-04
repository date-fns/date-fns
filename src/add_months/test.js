/* eslint-env mocha */

var assert = require('power-assert')
var addMonths = require('./')

describe('addMonths', function () {
  it('adds the given number of months', function () {
    var result = addMonths(new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepEqual(result, new Date(2015, 1 /* Feb */, 1))
  })

  it('accepts a string', function () {
    var result = addMonths(new Date(2014, 8 /* Sep */, 1).toISOString(), 12)
    assert.deepEqual(result, new Date(2015, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = addMonths(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2015, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    addMonths(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = addMonths(date, 2)
    assert.deepEqual(result, new Date(2015, 1 /* Feb */, 28))
  })
})

