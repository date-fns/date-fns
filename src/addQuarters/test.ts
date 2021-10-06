/* eslint-env mocha */

import assert from 'assert'
import addQuarters from '.'

describe('addQuarters', function () {
  it('adds the given number of quarters', function () {
    const result = addQuarters(new Date(2014, 8 /* Sep */, 1), 1)
    assert.deepStrictEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('accepts a timestamp', function () {
    const result = addQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4)
    assert.deepStrictEqual(result, new Date(2015, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 8 /* Sep */, 1)
    addQuarters(date, 4)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    const date = new Date(2014, 11 /* Dec */, 31)
    const result = addQuarters(date, 3)
    assert.deepStrictEqual(result, new Date(2015, 8 /* Sep */, 30))
  })

  it('handles dates before 100 AD', function () {
    const initialDate = new Date(0)
    initialDate.setFullYear(-1, 10 /* Nov */, 30)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = addQuarters(initialDate, 1)
    assert.deepStrictEqual(result, expectedResult)
  })
})
