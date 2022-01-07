// @flow
/* eslint-env mocha */

import assert from 'assert'
import setDayOfYear from '.'

describe('setDayOfYear', () => {
  it('sets the day of the year', () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), 2)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('accepts a timestamp', () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2).getTime(), 60)
    assert.deepEqual(result, new Date(2014, 2 /* Mar */, 1))
  })

  it('converts a fractional number to an integer', () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), 2.75)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('implicitly converts number arguments', () => {
    // $ExpectedMistake
    // @ts-expect-error
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), '2')
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 2)
    setDayOfYear(date, 365)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setDayOfYear(new Date(NaN), 2)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setDayOfYear.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setDayOfYear.bind(null, 1), TypeError)
  })
})
