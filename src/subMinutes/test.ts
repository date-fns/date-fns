/* eslint-env mocha */

import assert from 'assert'
import subMinutes from '.'

describe('subMinutes', () => {
  it('subtracts the given number of minutes', () => {
    const result = subMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 30))
  })

  it('accepts a timestamp', () => {
    const result = subMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(),
      20
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 40))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 0)
    subMinutes(date, 25)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 0))
  })
})
