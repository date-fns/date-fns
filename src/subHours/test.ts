// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subHours from '.'

describe('subHours', function() {
  it('subtracts the given numbers of hours', function() {
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), 2)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('accepts a timestamp', function() {
    const result = subHours(new Date(2014, 6 /* Jul */, 12, 1, 0).getTime(), 26)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('converts a fractional number to an integer', function() {
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), 2.22)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    // @ts-expect-error
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), '2')
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 6 /* Jul */, 10, 23, 0)
    subHours(date, 10)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = subHours(new Date(NaN), 2)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subHours.bind(null), TypeError)
    assert.throws(subHours.bind(null, 1), TypeError)
  })
})
