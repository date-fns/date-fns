// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachWeekendOfInterval from '.'

describe('eachWeekendOfInterval', function() {
  it('returns array length of 4', function() {
    var result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 17),
      end: new Date(2018, 8 /* Sept */, 30)
    })
    assert(result.length === 4)
  })

  it('returns array length of 4 with date.toISOString()', function() {
    var result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 17).toISOString(),
      end: new Date(2018, 8 /* Sept */, 30).toISOString()
    })
    assert(result.length === 4)
  })

  it('returns array length of 4 when date strings are used', function() {
    var result = eachWeekendOfInterval({
      start: new Date('September 17, 2019'),
      end: new Date('September 30, 2019')
    })
    assert(result.length === 4)
  })

  it('the first Saturday returned is Sat Sep 22 2018', function() {
    var result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 17),
      end: new Date(2018, 8 /* Sept */, 30)
    })
    assert(result[0].toDateString() === 'Sat Sep 22 2018')
  })

  it('the first Sunday returned is Sun Sep 23 2018', function() {
    var result = eachWeekendOfInterval({
      start: new Date(2018, 8, 17),
      end: new Date(2018, 8, 30)
    })
    assert(result[1].toDateString() === 'Sun Sep 23 2018')
  })

  it('the second Saturday returned is Sat Sep 29 2018', function() {
    var result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 17),
      end: new Date(2018, 8 /* Sept */, 30)
    })
    assert(result[2].toDateString() === 'Sat Sep 29 2018')
  })

  it('the second Sunday returned is Sun Sep 30 2018', function() {
    var result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 17),
      end: new Date(2018, 8 /* Sept */, 30)
    })
    assert(result[3].toDateString() === 'Sun Sep 30 2018')
  })

  it('returns array length of 104', function() {
    var result = eachWeekendOfInterval({
      start: new Date(2019, 0 /* Jan */, 1),
      end: new Date(2019, 11 /* Dec */, 31)
    })
    assert(result.length === 104)
  })

  it('returns Sun Mar 17 2019', function() {
    var result = eachWeekendOfInterval({
      start: new Date(2019, 0 /* Jan */, 1),
      end: new Date(2019, 11 /* Dec */, 31)
    })
    assert(result[21].toDateString() === 'Sun Mar 17 2019')
  })

  it('returns Sat Oct 26 2019', function() {
    var result = eachWeekendOfInterval({
      start: new Date(2019, 0 /* Jan */, 1),
      end: new Date(2019, 11 /* Dec */, 31)
    })
    assert(result[84].toDateString() === 'Sat Oct 26 2019')
  })

  it('throws `RangeError` invalid interval start date is used', function() {
    // $ExpectedMistake
    var block = eachWeekendOfInterval.bind(
      null,
      {
        start: new Date(NaN),
        end: new Date(2019, 11 /* Dec */, 31)
      },
      { weekStartsOn: 6 }
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` invalid interval end date is used', function() {
    // $ExpectedMistake
    var block = eachWeekendOfInterval.bind(
      null,
      {
        start: new Date(2019, 0 /* Jan */, 1),
        end: new Date(NaN)
      },
      { weekStartsOn: 6 }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(eachWeekendOfInterval, TypeError)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    var block = eachWeekendOfInterval.bind(
      null,
      // $ExpectedMistake
      {
        start: new Date(2018, 8 /* Sept */, 17),
        end: new Date(2018, 8 /* Sept */, 30)
      },
      { weekStartsOn: 9 }
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.weekStartsOn` when passing in invalid value', function() {
    var block = eachWeekendOfInterval.bind(
      null,
      // $ExpectedMistake
      {
        start: new Date(2018, 8 /* Sept */, 17),
        end: new Date(2018, 8 /* Sept */, 30)
      },
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if start of an interval is after its end', function() {
    var block = eachWeekendOfInterval.bind(
      null,
      // $ExpectedMistake
      {
        start: new Date(2018, 8 /* Sept */, 25),
        end: new Date(2018, 8 /* Sept */, 6)
      },
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })
})
