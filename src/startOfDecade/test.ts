// @flow
/* eslint-env mocha */

import assert from 'assert'
import startOfDecade from '.'

describe('startOfDecade', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a year', () => {
    const date = new Date(1953, 3 /* Apr */, 13)
    const result = startOfDecade(date)
    assert.deepEqual(result, new Date(1950, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', () => {
    const date = new Date(1984, 9 /* Oct */, 14).getTime()
    const result = startOfDecade(date)
    assert.deepEqual(result, new Date(1980, 0 /* Jan */, 1))
  })

  it('does not mutate the original date', () => {
    const date = new Date(1978, 10 /* Nov */, 14)
    startOfDecade(date)
    assert.deepEqual(date, new Date(1978, 10 /* Nov */, 14))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = startOfDecade(new Date(NaN))
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(startOfDecade.bind(null), TypeError)
  })
})
