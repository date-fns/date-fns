/* eslint-env mocha */

import assert from 'assert'
import quartersToYears from '.'

describe('quartersToYears', function () {
  it('converts quarters to years', function () {
    assert(quartersToYears(4) === 1)
    assert(quartersToYears(8) === 2)
  })

  it('uses floor rounding', () => {
    assert(quartersToYears(5) === 1)
    assert(quartersToYears(3) === 0)
  })

  it('handles border values', () => {
    assert(quartersToYears(4.5) === 1)
    assert(quartersToYears(0) === 0)
  })
})
