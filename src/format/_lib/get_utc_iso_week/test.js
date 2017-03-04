// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getUTCISOWeek from '.'

describe('getUTCISOWeek', function () {
  it('returns the ISO week of the given date', function () {
    var result = getUTCISOWeek(new Date(Date.UTC(2005, 0 /* Jan */, 2)))
    assert(result === 53)
  })

  it('accepts a string', function () {
    var result = getUTCISOWeek(new Date(Date.UTC(2008, 11 /* Dec */, 29)).toISOString())
    assert(result === 1)
  })

  it('accepts a timestamp', function () {
    var result = getUTCISOWeek(new Date(Date.UTC(2008, 11 /* Dec */, 29)).getTime())
    assert(result === 1)
  })

  describe('edge cases', function () {
    it('returns the ISO week at 1 January 2016', function () {
      var result = getUTCISOWeek(new Date(Date.UTC(2016, 0 /* Jan */, 1)))
      assert(result === 53)
    })

    it('returns the ISO week at 1 May 2016', function () {
      var result = getUTCISOWeek(new Date(Date.UTC(2016, 4 /* May */, 1)))
      assert(result === 17)
    })

    it('returns the ISO week at 2 May 2016', function () {
      var result = getUTCISOWeek(new Date(Date.UTC(2016, 4 /* May */, 2)))
      assert(result === 18)
    })

    it('returns the ISO week at 31 May 2016', function () {
      var result = getUTCISOWeek(new Date(Date.UTC(2016, 4 /* May */, 31)))
      assert(result === 22)
    })
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(7, 11 /* Dec */, 30)
    initialDate.setUTCHours(0, 0, 0, 0)
    var result = getUTCISOWeek(initialDate)
    assert(result === 52)
  })
})
