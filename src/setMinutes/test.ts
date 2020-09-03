// @flow
/* eslint-env mocha */
import assert from 'assert'

import setMinutes from '.'


describe('setMinutes', function() {
  it('sets the minutes', function() {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('accepts a timestamp', function() {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(), 5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 5))
  })

  it('converts a fractional number to an integer', function() {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45.54)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), '45')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30)
    setMinutes(date, 15)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setMinutes(new Date(NaN), 45)
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), NaN)
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setMinutes.bind(null), TypeError)
    assert.throws(setMinutes.bind(null, 1), TypeError)
  })
})
