// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfISOYear from '.'

describe('lastDayOfISOYear', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the last day of an ISO year', function () {
    var result = lastDayOfISOYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3))
  })

  it('accepts a string', function () {
    var result = lastDayOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).toISOString())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2))
  })

  it('accepts a timestamp', function () {
    var result = lastDayOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    lastDayOfISOYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(5, 0 /* Jan */, 4)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(6, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    var result = lastDayOfISOYear(initialDate)
    assert.deepEqual(result, expectedResult)
  })
})
