// @flow
/* eslint-env mocha */

import assert from 'assert'
import endOfHour from '.'

describe('endOfHour', () => {
  it('returns the date with the time set to the last millisecond before an hour ends', () => {
    const date = new Date(2014, 11, 1, 22, 15)
    const result = endOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('accepts a timestamp', () => {
    const result = endOfHour(new Date(2014, 11, 1, 22, 15).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 11, 1, 22, 15)
    endOfHour(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = endOfHour(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(endOfHour.bind(null), TypeError)
  })
})
