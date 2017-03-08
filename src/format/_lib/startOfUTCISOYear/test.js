// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfUTCISOYear from '.'

describe('format > startOfUTCISOYear', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of an ISO year', function () {
    var result = startOfUTCISOYear(new Date(Date.UTC(2009, 0 /* Jan */, 1, 16, 0)))
    assert.deepEqual(result, new Date(Date.UTC(2008, 11 /* Dec */, 29, 0, 0, 0, 0)))
  })

  it('accepts a string', function () {
    var result = startOfUTCISOYear(new Date(Date.UTC(2005, 0 /* Jan */, 1, 6, 0)).toISOString())
    assert.deepEqual(result, new Date(Date.UTC(2003, 11 /* Dec */, 29, 0, 0, 0, 0)))
  })

  it('accepts a timestamp', function () {
    var result = startOfUTCISOYear(new Date(Date.UTC(2005, 0 /* Jan */, 1, 6, 0)).getTime())
    assert.deepEqual(result, new Date(Date.UTC(2003, 11 /* Dec */, 29, 0, 0, 0, 0)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2))
    startOfUTCISOYear(date)
    assert.deepEqual(date, new Date(Date.UTC(2014, 6 /* Jul */, 2)))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(9, 0 /* Jan */, 1, 16, 0)
    initialDate.setUTCHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setUTCFullYear(8, 11 /* Dec */, 29)
    expectedResult.setUTCHours(0, 0, 0, 0)
    var result = startOfUTCISOYear(initialDate)
    assert.deepEqual(result, expectedResult)
  })

  it('correctly handles years in which 4 January is Sunday', function () {
    var result = startOfUTCISOYear(new Date(Date.UTC(2009, 6 /* Jul */, 2)))
    assert.deepEqual(result, new Date(Date.UTC(2008, 11 /* Dec */, 29)))
  })
})
