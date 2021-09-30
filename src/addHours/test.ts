/* eslint-env mocha */

import assert from 'assert'
import addHours from '.'

describe('addHours', () => {
  it('adds the given numbers of hours', () => {
    const result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('accepts a timestamp', () => {
    const result = addHours(
      new Date(2014, 6 /* Jul */, 10, 23, 0).getTime(),
      26
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 12, 1, 0))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 10, 23, 0)
    addHours(date, 10)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })
})
