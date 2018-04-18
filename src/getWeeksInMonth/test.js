// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getWeeksInMonth from '.'

describe('getWeeksInMonth', function () {
  it('returns the number of calendar weeks the month in the given date spans', function () {
    var result = getWeeksInMonth(
      new Date(2015, 1 /* Feb */, 8, 18, 0)
    )
    assert(result === 4)
  })

  it('allows to specify which day is the first day of the week', function () {
    var result = getWeeksInMonth(
      new Date(2015, 1 /* Feb */, 8, 18, 0),
      {weekStartsOn: 1}
    )
    assert(result === 5)
  })

  it('allows to specify which day is the first day of the week in locale', function () {
    var result = getWeeksInMonth(
      new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        // $ExpectedMistake
        locale: {
          options: {weekStartsOn: 1}
        }
      }
    )
    assert(result === 5)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var result = getWeeksInMonth(
      new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        weekStartsOn: 1,
        // $ExpectedMistake
        locale: {
          options: {weekStartsOn: 0}
        }
      }
    )
    assert(result === 5)
  })

  it('accepts strings', function () {
    var result = getWeeksInMonth(
      new Date(2017, 2 /* Mar */, 8, 18, 0).toISOString()
    )
    assert(result === 5)
  })

  it('accepts timestamps', function () {
    var result = getWeeksInMonth(
      new Date(2017, 3 /* Apr */, 8, 18, 0).getTime()
    )
    assert(result === 6)
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    getWeeksInMonth(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns NaN if the date is `Invalid Date`', function () {
    var result = getWeeksInMonth(
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    var block = getWeeksInMonth.bind(
      null,
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      // $ExpectedMistake
      {weekStartsOn: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = getWeeksInMonth.bind(
      null,
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getWeeksInMonth.bind(null), TypeError)
  })
})
