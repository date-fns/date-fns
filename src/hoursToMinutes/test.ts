/* eslint-env mocha */

import assert from 'assert'
import hoursToMinutes from './index'

describe('hoursToMinutes', () => {
  it('converts hours to minutes', () => {
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
