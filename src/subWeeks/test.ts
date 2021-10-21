/* eslint-env mocha */

import assert from 'assert'
import subWeeks from '.'

describe('subWeeks', function () {
  it('subtracts the given number of weeks', function () {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('accepts a timestamp', function () {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 25))
  })

  it('converts a fractional number to an integer', function () {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4.2)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 8 /* Sep */, 1)
    subWeeks(date, 2)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
