// @flow
/* eslint-env mocha */
import assert from 'assert'

import setMilliseconds from '.'


describe('setMilliseconds', function() {
  it('sets the milliseconds', function() {
    var result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      300
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300))
  })

  it('accepts a timestamp', function() {
    var result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(),
      755
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755))
  })

  it('converts a fractional number to an integer', function() {
    var result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      300.999
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300))
  })

  it('implicitly converts number arguments', function() {
    var result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      // $ExpectedMistake
      '300'
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    setMilliseconds(date, 137)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setMilliseconds(new Date(NaN), 300)
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN
    )
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setMilliseconds.bind(null), TypeError)
    assert.throws(setMilliseconds.bind(null, 1), TypeError)
  })
})
