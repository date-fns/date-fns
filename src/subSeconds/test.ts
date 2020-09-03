// @flow
/* eslint-env mocha */
import assert from 'assert'

import subSeconds from '.'


describe('subSeconds', function() {
  it('subtracts the given number of seconds', function() {
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('accepts a timestamp', function() {
    var result = subSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(),
      20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40))
  })

  it('converts a fractional number to an integer', function() {
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30.5)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), '30')
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0)
    subSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = subSeconds(new Date(NaN), 30)
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), NaN)
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subSeconds.bind(null), TypeError)
    assert.throws(subSeconds.bind(null, 1), TypeError)
  })
})
