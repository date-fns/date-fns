/* eslint-env mocha */

import assert from 'assert'
import weeksToDays from '.'

describe('weeksToDays', function () {
  it('converts weeks to days', function () {
    assert(weeksToDays(1) === 7)
    assert(weeksToDays(2) === 14)
  })

  it('uses floor rounding', () => {
    assert(weeksToDays(1.5) === 10)
    assert(weeksToDays(0.1) === 0)
  })

  it('handles border values', () => {
    assert(weeksToDays(1.5) === 10)
    assert(weeksToDays(0) === 0)
  })
})
