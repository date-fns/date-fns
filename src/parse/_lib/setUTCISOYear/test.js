// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setUTCISOYear from '.'

describe('parse > setUTCISOYear', function () {
  it('sets the ISO week-numbering year, saving the ISO week and the day of the week', function () {
    var result = setUTCISOYear(new Date(Date.UTC(2008, 11 /* Dec */, 29)), 2007)
    assert.deepEqual(result, new Date(Date.UTC(2007, 0 /* Jan */, 1)))
  })

  it('accepts a string', function () {
    var result = setUTCISOYear(new Date(Date.UTC(2010, 0 /* Jan */, 2)).toISOString(), 2004)
    assert.deepEqual(result, new Date(Date.UTC(2005, 0 /* Jan */, 1)))
  })

  it('accepts a timestamp', function () {
    var result = setUTCISOYear(new Date(Date.UTC(2010, 0 /* Jan */, 2)).getTime(), 2004)
    assert.deepEqual(result, new Date(Date.UTC(2005, 0 /* Jan */, 1)))
  })

  it('implicitly converts number arguments', function () {
    var result = setUTCISOYear(new Date(Date.UTC(2008, 11 /* Dec */, 29)), '2007')
    assert.deepEqual(result, new Date(Date.UTC(2007, 0 /* Jan */, 1)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2008, 11 /* Dec */, 29))
    setUTCISOYear(date, 2000)
    assert.deepEqual(date, new Date(Date.UTC(2008, 11 /* Dec */, 29)))
  })

  it('sets ISO week-numbering years less than 100', function () {
    var initialDate = new Date(Date.UTC(2008, 11 /* Dec */, 29))
    var expectedResult = new Date(0)
    expectedResult.setUTCFullYear(7, 0 /* Jan */, 1)
    expectedResult.setUTCHours(0, 0, 0, 0)
    var result = setUTCISOYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(8, 11 /* Dec */, 29)
    initialDate.setUTCHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setUTCFullYear(7, 0 /* Jan */, 1)
    expectedResult.setUTCHours(0, 0, 0, 0)
    var result = setUTCISOYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setUTCISOYear(new Date(NaN), 2007)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setUTCISOYear(new Date(2008, 11 /* Dec */, 29), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = setUTCISOYear.bind(null, new Date(2008, 11 /* Dec */, 29), 2007, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })
})
