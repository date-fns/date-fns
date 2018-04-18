// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfISOWeekYear from '.'

describe('endOfISOWeekYear', function () {
  it('returns the date with the time setted to 23:59:59.999 and the date setted to the last day of an ISO year', function () {
    var result = endOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3, 23, 59, 59, 999))
  })

  it('accepts a string', function () {
    var result = endOfISOWeekYear(new Date(2005, 0 /* Jan */, 1, 6, 0).toISOString())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2, 23, 59, 59, 999))
  })

  it('accepts a timestamp', function () {
    var result = endOfISOWeekYear(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2, 23, 59, 59, 999))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    endOfISOWeekYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(5, 0 /* Jan */, 4)
    initialDate.setHours(16, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(6, 0 /* Jan */, 1)
    expectedResult.setHours(23, 59, 59, 999)
    var result = endOfISOWeekYear(initialDate)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = endOfISOWeekYear(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = endOfISOWeekYear.bind(null, new Date(2009, 0 /* Jan */, 1, 16, 0), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(endOfISOWeekYear.bind(null), TypeError)
  })
})
