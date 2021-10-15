/* eslint-env mocha */

import assert from 'assert'
import addSeconds from '.'

describe('addSeconds', () => {
  it('adds the given number of seconds', () => {
    const result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30))
  })

  it('accepts a timestamp', () => {
    const result = addSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(),
      20
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 20))
  })

  it('converts a fractional number to an integer', () => {
    const result = addSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0),
      30.777
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0)
    addSeconds(date, 15)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
  })
})
