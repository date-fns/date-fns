// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfUTCWeek from '.'

describe('startOfUTCWeek', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of a week', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    var result = startOfUTCWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    var result = startOfUTCWeek(date, {weekStartsOn: 1})
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('allows to specify which day is the first day of the week in locale', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    var result = startOfUTCWeek(
      date,
      {
        locale: {
          options: {weekStartsOn: 1}
        }
      }
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    var result = startOfUTCWeek(
      date,
      {
        weekStartsOn: 1,
        locale: {
          options: {weekStartsOn: 0}
        }
      }
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('implicitly converts options', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    var result = startOfUTCWeek(date, {weekStartsOn: '1'})
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('accepts a string', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0)).toISOString()
    var result = startOfUTCWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('accepts a timestamp', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0)).getTime()
    var result = startOfUTCWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    startOfUTCWeek(date)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0)))
  })

  describe('edge cases', function () {
    context('when the given day is before the start of a week', function () {
      it('it returns the start of a week', function () {
        var date = new Date(Date.UTC(2014, 9 /* Oct */, 6))
        var result = startOfUTCWeek(date, {weekStartsOn: 3})
        assert.deepEqual(result, new Date(Date.UTC(2014, 9 /* Oct */, 1)))
      })
    })

    context('when the given day is the start of a week', function () {
      it('it returns the start of a week', function () {
        var date = new Date(Date.UTC(2014, 9 /* Oct */, 8))
        var result = startOfUTCWeek(date, {weekStartsOn: 3})
        assert.deepEqual(result, new Date(Date.UTC(2014, 9 /* Oct */, 8)))
      })
    })

    context('when the given day is after the start of a week', function () {
      it('it returns the start of a week', function () {
        var date = new Date(Date.UTC(2014, 9 /* Oct */, 10))
        var result = startOfUTCWeek(date, {weekStartsOn: 3})
        assert.deepEqual(result, new Date(Date.UTC(2014, 9 /* Oct */, 8)))
      })
    })

    it('handles the week at the start of a year', function () {
      var date = new Date(Date.UTC(2014, 0 /* Jan */, 1))
      var result = startOfUTCWeek(date)
      assert.deepEqual(result, new Date(Date.UTC(2013, 11 /* Dec */, 29)))
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfUTCWeek(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    var block = startOfUTCWeek.bind(null, new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0)), {weekStartsOn: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    var block = startOfUTCWeek.bind(null, date, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(startOfUTCWeek.bind(null), TypeError)
  })
})
