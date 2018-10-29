// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachWeekendOfYear from '.'

describe('eachWeekendOfYear', function() {
  it('returns array length of 104', function() {
    var result = eachWeekendOfYear(new Date(2020, 0, 1))
    assert(result.length === 104)
  })

  it('returns array length of 104 when year value is a string', function() {
    var result = eachWeekendOfYear(new Date(2018, 11, 31))
    assert(result.length === 104)
  })

  it('returns the date of index 60: Sat Aug 01 2020', function() {
    var result = eachWeekendOfYear(new Date(2020, 2, 22))
    assert(result[60].toDateString() === 'Sat Aug 01 2020')
  })

  it('returns the last Sunday of the year: Sun Dec 27 2020', function() {
    var result = eachWeekendOfYear(new Date(2020, 8, 12))
    assert(result[103].toDateString() === 'Sun Dec 27 2020')
  })

  it('throws TypeError exception when no argument is passed in', function() {
    assert.throws(eachWeekendOfYear.bind(null), TypeError)
  })

  it('throws TypeError exception when the expected year is a NaN', function() {
    assert.throws(eachWeekendOfYear.bind(NaN), TypeError)
  })

  it('throws RangeError exception when the additionalDigits option is a NaN', function() {
    assert.throws(
      eachWeekendOfYear.bind(
        null,
        // $ExpectedMistake
        new Date(2020, 5, 28),
        { additionalDigits: NaN }
      ),
      RangeError
    )
  })

  it('throws RangeError exception when date is invalid', function() {
    assert.throws(
      eachWeekendOfYear.bind(null, new Date(NaN), { additionalDigits: 2 }),
      RangeError
    )
  })
})
