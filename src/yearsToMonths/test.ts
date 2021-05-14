/* eslint-env mocha */

import assert from 'assert'
import yearsToMonths from '.'

describe('yearsToMonths', function () {
  it('converts 1 year to months', function () {
    const result = yearsToMonths(1)
    assert(result === 12)
  })

  it('converts 3 years to months', function () {
    const result = yearsToMonths(3)
    assert(result === 36)
  })

  it('converts 5 years to months', function () {
    const result = yearsToMonths(5)
    assert(result === 60)
  })
})
