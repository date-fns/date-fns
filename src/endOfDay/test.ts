/* eslint-env mocha */

import assert from 'assert'
import endOfDay from './index'

describe('endOfDay', () => {
  it('returns the date with the time set to 23:59:59.999', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = endOfDay(date)
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = endOfDay(date)
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfDay(date)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = endOfDay(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(endOfDay.bind(null), TypeError)
  })
})
