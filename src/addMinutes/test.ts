/* eslint-env mocha */

import assert from 'assert'
import addMinutes from '.'

describe('addMinutes', () => {
  it('adds the given number of minutes', () => {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30))
  })

  it('accepts a timestamp', () => {
    const result = addMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(),
      20
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 20))
  })

  it('converts a fractional number to an integer', () => {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30.99)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 0)
    addMinutes(date, 25)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 0))
  })
})
