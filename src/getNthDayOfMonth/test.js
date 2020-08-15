// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getNthDayOfMonth from '.'

describe('getNthDayOfMonth', function() {
  it('returns nth day of the month', function() {
    var result = getNthDayOfMonth(new Date(2020, 6, 12), 4, 3)
    assert.deepEqual(result, new Date(2020, 6, 16))
  })

  it('returns nth day of the month', function() {
    var result = getNthDayOfMonth(new Date(2050, 3, 15), 6, 4)
    assert.deepEqual(result, new Date(2050, 3, 23))
  })

  it('returns nth day of the month', function() {
    var result = getNthDayOfMonth(new Date(2020, 9, 14), 3, 2)
    assert.deepEqual(result, new Date(2020, 9, 14))
  })

  it('returns nth day of the month', function() {
    var result = getNthDayOfMonth(new Date(2020, 6, 18), 5, 5)
    assert.deepEqual(result, new Date(2020, 6, 31))
  })

  it('returns nth day of the month', function() {
    var result = getNthDayOfMonth(new Date(2025, 10, 10), 5, 4)
    assert.deepEqual(result, new Date(2025, 10, 28))
  })

  it('throws an exception if the calcualted date exceeds the month', function() {
    var block = getNthDayOfMonth.bind(null, new Date(2020, 6, 10), 6, 5)
    assert.throws(block, RangeError)
  })

  it('throws an exception if the day does not fall between 0 and 6 inclusively', function() {
    var block = getNthDayOfMonth.bind(null, new Date(2020, 6, 10), 7, 5)
    assert.throws(block, RangeError)
  })
})
