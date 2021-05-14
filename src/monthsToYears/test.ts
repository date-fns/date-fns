/* eslint-env mocha */

import assert from 'assert'
import monthsToYears from '.'

describe('monthsToYears', function () {
  it('converts 10 months to year', function () {
    const result = monthsToYears(10)
    assert(result === 0)
  })

  it('converts 15 months to year', function () {
    const result = monthsToYears(15)
    assert(result === 1)
  })

  it('converts 40 months to year', function () {
    const result = monthsToYears(40)
    assert(result === 3)
  })

  it('converts 65 months to year', function () {
    const result = monthsToYears(65)
    assert(result === 5)
  })
})
