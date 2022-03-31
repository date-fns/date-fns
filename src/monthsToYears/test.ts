/* eslint-env mocha */

import assert from 'assert'
import monthsToYears from '.'

describe('monthsToYears', () => {
  it('converts months to years', () => {
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

  it('use Decimals', () => {
    assert(monthsToYears(36, { decimals: true }) === 3)
    assert(monthsToYears(40, { decimals: true }) === 3.33)
  })

  it('use Decimals and digits', () => {
    assert(monthsToYears(40, { decimals: true, digits: 4 }) === 3.3333)
  })
})
