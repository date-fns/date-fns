// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfISOYear from '.'

describe('endOfISOYear', function () {
  it('returns the date with the time setted to 23:59:59.999 and the date setted to the last day of an ISO year', function () {
    var result = endOfISOYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3, 23, 59, 59, 999))
  })

  it('accepts a string', function () {
    var result = endOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).toISOString())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2, 23, 59, 59, 999))
  })

  it('accepts a timestamp', function () {
    var result = endOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2, 23, 59, 59, 999))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    endOfISOYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(5, 0 /* Jan */, 4)
    initialDate.setHours(16, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(6, 0 /* Jan */, 1)
    expectedResult.setHours(23, 59, 59, 999)
    var result = endOfISOYear(initialDate)
    assert.deepEqual(result, expectedResult)
  })
})
