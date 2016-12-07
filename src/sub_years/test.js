// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subYears from '.'

describe('subYears', function () {
  it('subtracts the given number of years', function () {
    var result = subYears(new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepEqual(result, new Date(2009, 8 /* Sep */, 1))
  })

  it('accepts a string', function () {
    var result = subYears(new Date(2014, 8 /* Sep */, 1).toISOString(), 12)
    assert.deepEqual(result, new Date(2002, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = subYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2002, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    subYears(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles the leap years properly', function () {
    var result = subYears(new Date(2016, 1 /* Feb */, 29), 1)
    assert.deepEqual(result, new Date(2015, 1 /* Feb */, 28))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(0, 1 /* Feb */, 29)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(-1, 1 /* Feb */, 28)
    expectedResult.setHours(0, 0, 0, 0)
    var result = subYears(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })
})
