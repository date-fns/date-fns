/* eslint-env mocha */

import assert from 'assert'
import monthsToQuarters from '.'

describe('monthsToQuarters', function () {
  it('converts 2 months to quarters', function () {
    const result = monthsToQuarters(2)
    assert(result === 0)
  })

  it('converts 4 months to quarters', function () {
    const result = monthsToQuarters(4)
    assert(result === 1)
  })

  it('converts 10 months to quarters', function () {
    const result = monthsToQuarters(10)
    assert(result === 3)
  })

  it('converts 15 months to quarters', function () {
    const result = monthsToQuarters(15)
    assert(result === 5)
  })
})
