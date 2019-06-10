// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInBusinessDays from '.'

describe('differenceInBusinessDays', function() {
  it('returns the number of business days between the given dates, excluding weekends', function() {
    var result = differenceInBusinessDays(
      new Date(2014, 0 /* Jan */, 10),
      new Date(2014, 6 /* Jul */, 20)
    )
    assert(result === 136)
  })

  it('accepts timestamps', function() {
    var result = differenceInBusinessDays(
      new Date(2014, 0, 10).getTime(),
      new Date(2014, 6, 20).getTime()
    )
    assert(result === 136)
  })

  describe('edge cases', function() {
    it('counts endDate, even when date is the same', function() {
      var result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 1)
    })

    it('throws RangeError when start date is after end date', function() {
      assert.throws(
        differenceInBusinessDays.bind(
          null,
          new Date(2014, 6, 20).getTime(),
          new Date(2014, 0, 10).getTime()
        ),
        RangeError
      )
    })
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(differenceInBusinessDays.bind(null), TypeError)
    assert.throws(differenceInBusinessDays.bind(null, 1), TypeError)
  })
})
