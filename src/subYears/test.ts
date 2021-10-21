/* eslint-env mocha */

import assert from 'assert'
import subYears from '.'

describe('subYears', () => {
  it('subtracts the given number of years', () => {
    const result = subYears(new Date(2014, 8 /* Sep */, 1), 5)
    console.log(111, result)
    assert.deepStrictEqual(result, new Date(2009, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', () => {
    const result = subYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepStrictEqual(result, new Date(2002, 8 /* Sep */, 1))
  })

  it('converts a fractional number to an integer', () => {
    const result = subYears(new Date(2014, 8 /* Sep */, 1), 5.1)
    assert.deepStrictEqual(result, new Date(2009, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    subYears(date, 12)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles the leap years properly', () => {
    const result = subYears(new Date(2016, 1 /* Feb */, 29), 1)
    assert.deepStrictEqual(result, new Date(2015, 1 /* Feb */, 28))
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(0, 1 /* Feb */, 29)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(-1, 1 /* Feb */, 28)
    expectedResult.setHours(0, 0, 0, 0)
    const result = subYears(initialDate, 1)
    assert.deepStrictEqual(result, expectedResult)
  })
})
