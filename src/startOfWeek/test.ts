// @flow
/* eslint-env mocha */
import assert from 'assert'

import startOfWeek from '.'


describe('startOfWeek', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a week', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    var result = startOfWeek(date)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('allows to specify which day is the first day of the week', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfWeek(date, { weekStartsOn: 1 })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('allows to specify which day is the first day of the week in locale', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfWeek(date, {
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 1 }
      }
    })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfWeek(date, {
      weekStartsOn: 1,
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 0 }
      }
    })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('implicitly converts options', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // $ExpectedMistake
    var result = startOfWeek(date, { weekStartsOn: '1' })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    var result = startOfWeek(date)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    startOfWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function() {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'context'.
    context('when the given day is before the start of a week', function() {
      it('it returns the start of a week', function() {
        var date = new Date(2014, 9 /* Oct */, 6)
        var result = startOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 1))
      })
    })

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'context'.
    context('when the given day is the start of a week', function() {
      it('it returns the start of a week', function() {
        var date = new Date(2014, 9 /* Oct */, 8)
        var result = startOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 8))
      })
    })

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'context'.
    context('when the given day is after the start of a week', function() {
      it('it returns the start of a week', function() {
        var date = new Date(2014, 9 /* Oct */, 10)
        var result = startOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 8))
      })
    })

    it('handles the week at the start of a year', function() {
      var date = new Date(2014, 0 /* Jan */, 1)
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      var result = startOfWeek(date)
      assert.deepEqual(result, new Date(2013, 11 /* Dec */, 29))
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    var result = startOfWeek(new Date(NaN))
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    var block = startOfWeek.bind(
      null,
      new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
      // $ExpectedMistake
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfWeek.bind(null), TypeError)
  })
})
