/* eslint-env mocha */

var assert = require('power-assert')
var addYears = require('./')

describe('addYears', function () {
  it('adds the given number of years', function () {
    var result = addYears(new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepEqual(result, new Date(2019, 8 /* Sep */, 1))
  })

  it('accepts a string', function () {
    var result = addYears(new Date(2014, 8 /* Sep */, 1).toISOString(), 12)
    assert.deepEqual(result, new Date(2026, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = addYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2026, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    addYears(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles the leap years properly', function () {
    var result = addYears(new Date(2016, 1 /* Feb */, 29), 1)
    assert.deepEqual(result, new Date(2017, 1 /* Feb */, 28))
  })
})

