/* eslint-env mocha */

import assert from 'assert'
import yearsToQuarters from '.'

describe('yearsToQuarters', function () {
  it('converts 1 year to quarters', function () {
    const result = yearsToQuarters(1)
    assert(result === 4)
  })

  it('converts 3 years to quarters', function () {
    const result = yearsToQuarters(3)
    assert(result === 12)
  })

  it('converts 5 years to quarters', function () {
    const result = yearsToQuarters(5)
    assert(result === 20)
  })
})
