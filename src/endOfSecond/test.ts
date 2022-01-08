/* eslint-env mocha */

import assert from 'assert'
import endOfSecond from '.'

describe('endOfSecond', () => {
  it('returns the date with the time set to the last millisecond before a second ends', () => {
    const date = new Date(2014, 11, 1, 22, 15, 30)
    const result = endOfSecond(date)
    assert.deepStrictEqual(result, new Date(2014, 11, 1, 22, 15, 30, 999))
  })

  it('accepts a timestamp', () => {
    const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45).getTime())
    assert.deepStrictEqual(result, new Date(2014, 11, 1, 22, 15, 45, 999))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 11, 1, 22, 15, 15, 300)
    endOfSecond(date)
    assert.deepStrictEqual(date, new Date(2014, 11, 1, 22, 15, 15, 300))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = endOfSecond(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })
})
