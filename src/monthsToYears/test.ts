/* eslint-env mocha */

import assert from 'assert'
import monthsToYears from '.'

describe('monthsToYears', function () {
  it('converts months to years', function () {
    assert(monthsToYears(12) === 1)
    assert(monthsToYears(24) === 2)
  })

  it('uses floor rounding', () => {
    assert(monthsToYears(13) === 1)
    assert(monthsToYears(11) === 0)
  })

  it('handles border values', () => {
    assert(monthsToYears(12.5) === 1)
    assert(monthsToYears(0) === 0)
  })
})
