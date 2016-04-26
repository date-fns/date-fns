/* eslint-env mocha */

var assert = require('power-assert')
var lastDayOfISOYear = require('./')

describe('lastDayOfISOYear', function () {
  it('returns date with time setted to 00:00:00 and date setted to last day of ISO year', function () {
    var result = lastDayOfISOYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3))
  })

  it('accepts string', function () {
    var result = lastDayOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).toISOString())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2))
  })

  it('accepts timestamp', function () {
    var result = lastDayOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2))
  })

  it('does not mutate original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    lastDayOfISOYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })
})

