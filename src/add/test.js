// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import add from '.'

describe('add', function() {
  it('adds the values from the given object', function() {
    var result = add(new Date(2014, 8 /* Sep */, 1, 10, 19, 50), {
      years: 2,
      months: 9,
      weeks: 1,
      days: 7,
      hours: 5,
      minutes: 9,
      seconds: 30
    })
    assert.deepEqual(result, new Date(2017, 5 /* June */, 15, 15, 29, 20))
  })

  it('returns same date object when passed empty duration values', function() {
    var result = add(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {})
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('accepts a timestamp', function() {
    var result = add(new Date(2014, 8 /* Sep */, 1, 10).getTime(), { hours: 4 })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 14))
  })

  it('converts a fractional number to an integer', function() {
    var result = add(new Date(2014, 8 /* Sep */, 1, 10), { hours: 4.2 })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 14))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = add(new Date(2014, 8 /* Sep */, 1, 10), { hours: '4.2' })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 14))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 10)
    add(date, { hours: 4 })
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = add(date, { months: 9 })
    assert.deepEqual(result, new Date(2015, 8 /* Sep */, 30))
  })

  it('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setFullYear(-1, 10 /* Nov */, 30)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    var result = add(initialDate, { months: 3 })
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = add(new Date(NaN), { hours: 5 })
    assert(result instanceof Date && isNaN(result))
  })

  it('throws RangeError exception if passed Number as duration', function() {
    // $ExpectedMistake
    const result = add(new Date(2014, 8, 1), 'wut')
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(add.bind(null), TypeError)
    assert.throws(add.bind(null, 1), TypeError)
  })
})
