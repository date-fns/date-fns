// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import intervalToDuration from '.'

describe('intervalToDuration', function() {
  it('Returns correct duration for arbitrary dates', function() {
    const start = new Date(1929, 0, 15, 12, 0, 0)
    const end = new Date(1968, 3, 4, 19, 5, 0)
    const result = intervalToDuration({ start, end })

    assert.deepEqual(result, {
      years: 39,
      months: 2,
      days: 20,
      hours: 7,
      minutes: 5,
      seconds: 0
    })
  })

  it('Returns correct duration for arbitrary dates with weeks enabled', function() {
    const start = new Date(1929, 0, 15, 12, 0, 0)
    const end = new Date(1968, 3, 4, 19, 5, 0)
    const result = intervalToDuration({ start, end, showWeeks: true })

    assert.deepEqual(result, {
      years: 39,
      months: 2,
      weeks: 2,
      days: 6,
      hours: 7,
      minutes: 5,
      seconds: 0
    })
  })
  it('Returns correct duration (1 of everything)', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2021, 3, 2, 13, 1, 1)
    const result = intervalToDuration({ start, end })

    assert.deepEqual(result, {
      years: 1,
      months: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1
    })
  })
  it('Returns duration of 0 when the dates are the same', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2020, 2, 1, 12, 0, 0)
    const result = intervalToDuration({ start, end })

    assert.deepEqual(result, {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    })
  })
})
