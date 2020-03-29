// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addHours from '.'

describe('addHours', function() {
  it('adds the given numbers of hours', function() {
    var result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('accepts a timestamp', function() {
    var result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0).getTime(), 26)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 12, 1, 0))
  })

  it('converts a fractional number to an integer', function() {
    var result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2.5)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), '2')
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 23, 0)
    addHours(date, 10)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addHours(new Date(NaN), 2)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addHours.bind(null), TypeError)
    assert.throws(addHours.bind(null, 1), TypeError)
  })
})
