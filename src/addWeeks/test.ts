// @flow
/* eslint-env mocha */

import assert from 'assert'
import addWeeks from '.'

describe('addWeeks', () => {
  it('adds the given number of weeks', () => {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('accepts a timestamp', () => {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 8))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    addWeeks(date, 2)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
