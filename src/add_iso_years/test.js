/* eslint-env mocha */

var assert = require('power-assert')
var addISOYears = require('./')

describe('addISOYears', function () {
  it('adds the given number of ISO week-numbering years', function () {
    var result = addISOYears(new Date(2010, 6 /* Jul */, 2), 5)
    assert.deepEqual(result, new Date(2015, 5 /* Jun */, 26))
  })

  it('accepts a string', function () {
    var result = addISOYears(new Date(2014, 8 /* Sep */, 1).toISOString(), 12)
    assert.deepEqual(result, new Date(2026, 7 /* Aug */, 31))
  })

  it('accepts a timestamp', function () {
    var result = addISOYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2026, 7 /* Aug */, 31))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    addISOYears(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

