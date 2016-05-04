/* eslint-env mocha */

var assert = require('power-assert')
var setMonth = require('./')

describe('setMonth', function () {
  it('sets the month', function () {
    var result = setMonth(new Date(2014, 8 /* Sep */, 1), 1)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
  })

  it('sets the last day of the month if the original date was the last day of a longer month', function () {
    var result = setMonth(new Date(2014, 11 /* Dec */, 31), 1)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 28))
  })

  it('accepts a string', function () {
    var result = setMonth(new Date(2014, 8 /* Sep */, 1).toISOString(), 11)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('accepts a timestamp', function () {
    var result = setMonth(new Date(2014, 8 /* Sep */, 1).getTime(), 11)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    setMonth(date, 5)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

