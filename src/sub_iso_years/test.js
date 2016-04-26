/* eslint-env mocha */

var assert = require('power-assert')
var subISOYears = require('./')

describe('subISOYears', function () {
  it('subtracts given number of ISO years', function () {
    var result = subISOYears(new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepEqual(result, new Date(2009, 7 /* Aug */, 31))
  })

  it('accepts string', function () {
    var result = subISOYears(new Date(2014, 8 /* Sep */, 1).toISOString(), 12)
    assert.deepEqual(result, new Date(2002, 8 /* Sep */, 2))
  })

  it('accepts timestamp', function () {
    var result = subISOYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2002, 8 /* Sep */, 2))
  })

  it('does not mutate original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    subISOYears(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

