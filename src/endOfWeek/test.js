// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfWeek from '.'

describe('endOfWeek', function () {
  it('returns the date with the time setted to 23:59:59:999 and the date setted to the last day of a week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfWeek(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    )
  })

  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfWeek(date, {weekStartsOn: 1})
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    )
  })

  it('allows to specify which day is the first day of the week in locale', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfWeek(
      date,
      {
        // $ExpectedMistake
        locale: {
          options: {weekStartsOn: 1}
        }
      }
    )
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    )
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfWeek(
      date,
      {
        weekStartsOn: 1,
        // $ExpectedMistake
        locale: {
          options: {weekStartsOn: 0}
        }
      }
    )
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    )
  })

  it('implicitly converts options', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // $ExpectedMistake
    var result = endOfWeek(date, {weekStartsOn: '1'})
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = endOfWeek(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = endOfWeek(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function () {
    context('when the given day is before the start of a week', function () {
      it('it returns the end of a week', function () {
        var date = new Date(2014, 9 /* Oct */, 6)
        var result = endOfWeek(date, {weekStartsOn: 3})
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 7, 23, 59, 59, 999))
      })
    })

    context('when the given day is the start of a week', function () {
      it('it returns the end of a week', function () {
        var date = new Date(2014, 9 /* Oct */, 8)
        var result = endOfWeek(date, {weekStartsOn: 3})
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999))
      })
    })

    context('when the given day is after the start of a week', function () {
      it('it returns the end of a week', function () {
        var date = new Date(2014, 9 /* Oct */, 10)
        var result = endOfWeek(date, {weekStartsOn: 3})
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999))
      })
    })

    it('handles the week at the end of a year', function () {
      var date = new Date(2014, 11 /* Dec */, 29)
      var result = endOfWeek(date, {weekStartsOn: 5})
      assert.deepEqual(result, new Date(2015, 0 /* Jan */, 1, 23, 59, 59, 999))
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = endOfWeek(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    // $ExpectedMistake
    var block = endOfWeek.bind(null, new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {weekStartsOn: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // $ExpectedMistake
    var block = endOfWeek.bind(null, date, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(endOfWeek.bind(null), TypeError)
  })
})
