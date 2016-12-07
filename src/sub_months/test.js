// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subMonths from '.'

describe('subMonths', function () {
  it('subtracts the given number of months', function () {
    var result = subMonths(new Date(2015, 1 /* Feb */, 1), 5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a string', function () {
    var result = subMonths(new Date(2015, 8 /* Sep */, 1).toISOString(), 12)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = subMonths(new Date(2015, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    subMonths(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = subMonths(date, 3)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(0, 2 /* Mar */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    var result = subMonths(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })
})
