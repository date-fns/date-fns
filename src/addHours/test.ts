// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addHours from '.'

describe('addHours', () => {
  it('adds the given numbers of hours', () => {
    const result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('accepts a timestamp', () => {
    const result = addHours(
      new Date(2014, 6 /* Jul */, 10, 23, 0).getTime(),
      26
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 12, 1, 0))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 10, 23, 0)
    addHours(date, 10)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addHours(new Date(NaN), 2)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })
})
