/* eslint-env mocha */

import assert from 'assert'
import clamp from './index'

describe('clamp', () => {
  it('accepts timestamps', () => {
    const start = new Date(2000, 1, 1).getTime()
    const date = new Date(2000, 1, 2).getTime()
    const end = new Date(2000, 1, 3).getTime()
    const result = clamp(date, { start, end })
    assert.deepStrictEqual(result, new Date(2000, 1, 2))
  })

  it('returns the start date when the date is less than start', () => {
    const start = new Date(2001, 1, 1)
    const date = new Date(2000, 1, 1)
    const end = new Date(2020, 1, 1)
    const result = clamp(date, { start, end })
    assert.deepStrictEqual(result, new Date(2001, 1, 1))
  })

  it('returns the end date when the date is greater than the end date', () => {
    const start = new Date(2000, 1, 1)
    const date = new Date(2003, 1, 1)
    const end = new Date(2001, 1, 1)
    const result = clamp(date, { start, end })
    assert.deepStrictEqual(result, new Date(2001, 1, 1))
  })

  it('returns the date when the date is within the bound of start and end', () => {
    const start = new Date(2000, 1, 1)
    const date = new Date(2001, 1, 1)
    const end = new Date(2003, 1, 1)
    const result = clamp(date, { start, end })
    assert.deepStrictEqual(result, new Date(2001, 1, 1))
  })
})
