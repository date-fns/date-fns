/* eslint-env mocha */

import assert from 'assert'
import startOfSecond from '.'

describe('startOfSecond', () => {
  it('returns the date with the time set to the first millisecond of a second', () => {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    const result = startOfSecond(date)
    assert.deepStrictEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400).getTime()
    const result = startOfSecond(date)
    assert.deepStrictEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    startOfSecond(date)
    assert.deepStrictEqual(
      date,
      new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    )
  })
})
