/* eslint-env mocha */

import assert from 'assert'
import hoursToMinutes from '.'

describe('hoursToMinutes', function () {
  it('converts hours to minutes', function () {
    assert(hoursToMinutes(1) === 60)
    assert(hoursToMinutes(2) === 120)
  })

  it('uses floor rounding', () => {
    assert(hoursToMinutes(0.123) === 7)
  })

  it('handles border values', () => {
    assert(hoursToMinutes(1.5) === 90)
    assert(hoursToMinutes(0) === 0)
  })
})
