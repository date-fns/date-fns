/* eslint-env mocha */

import assert from 'assert'
import startOfHour from '.'

describe('startOfHour', () => {
  it('returns the date with the time set to the first millisecond of an hour', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    const result = startOfHour(date)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    startOfHour(date)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55))
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55).getTime()
    const result = startOfHour(date)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })
})
