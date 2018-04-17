// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfUTCISOWeek from '.'

describe('startOfUTCISOWeek', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of an ISO week', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    var result = startOfUTCISOWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('accepts a string', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2, 11, 55, 0)).toISOString()
    var result = startOfUTCISOWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 5 /* Jun */, 30)))
  })

  it('accepts a timestamp', function () {
    var date = new Date(Date.UTC(2014, 1 /* Feb */, 11, 11, 55, 0)).getTime()
    var result = startOfUTCISOWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 1 /* Feb */, 10)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    startOfUTCISOWeek(date)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0)))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfUTCISOWeek(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var block = startOfUTCISOWeek.bind(null, date, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(startOfUTCISOWeek.bind(null), TypeError)
  })
})
