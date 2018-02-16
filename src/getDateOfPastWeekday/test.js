// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDateOfPastWeekday from '.'

describe('getDateOfPastWeekday', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the last Monday', function () {
    var date = new Date(2017, 10 /* Nov */, 22, 11, 55, 0)
    var result = getDateOfPastWeekday(1, date)
    assert.deepEqual(result,
      new Date(2017, 10 /* Nov */, 20)
    )
  })
  it('returns the date with the time setted to 00:00:00 and the date setted to the last Tuesday', function () {
    var date = new Date(2017, 10 /* Nov */, 22, 11, 55, 0)
    var result = getDateOfPastWeekday(2, date)
    assert.deepEqual(result,
      new Date(2017, 10 /* Nov */, 21)
    )
  })
  it('returns the date with the time setted to 00:00:00 and the date setted to the last Wednesday', function () {
    var date = new Date(2017, 10 /* Nov */, 22, 11, 55, 0)
    var result = getDateOfPastWeekday(3, date)
    assert.deepEqual(result,
      new Date(2017, 10 /* Nov */, 15)
    )
  })
  it('returns the date with the time setted to 00:00:00 and the date setted to the last Thursday', function () {
    var date = new Date(2017, 10 /* Nov */, 22, 11, 55, 0)
    var result = getDateOfPastWeekday(4, date)
    assert.deepEqual(result,
      new Date(2017, 10 /* Nov */, 16)
    )
  })
  it('returns the date with the time setted to 00:00:00 and the date setted to the last Friday', function () {
    var date = new Date(2017, 10 /* Nov */, 22, 11, 55, 0)
    var result = getDateOfPastWeekday(5, date)
    assert.deepEqual(result,
      new Date(2017, 10 /* Nov */, 17)
    )
  })
  it('returns the date with the time setted to 00:00:00 and the date setted to the last Saturday', function () {
    var date = new Date(2017, 10 /* Nov */, 22, 11, 55, 0)
    var result = getDateOfPastWeekday(6, date)
    assert.deepEqual(result,
      new Date(2017, 10 /* Nov */, 18)
    )
  })
  it('returns the date with the time setted to 00:00:00 and the date setted to the last Sunday', function () {
    var date = new Date(2017, 10 /* Nov */, 22, 11, 55, 0)
    var result = getDateOfPastWeekday(0, date)
    assert.deepEqual(result,
      new Date(2017, 10 /* Nov */, 19)
    )
  })
  it('throws TypeError exception if the argument is not passed', function () {
    assert.throws(getDateOfPastWeekday.bind(null), TypeError)
  })
  it('throws RangeError exception if passed less than 0 argument', function () {
    assert.throws(getDateOfPastWeekday.bind(null, -1), RangeError)
  })
  it('throws RangeError exception if passed greater than 6 argument', function () {
    assert.throws(getDateOfPastWeekday.bind(null, 7), RangeError)
  })
})
