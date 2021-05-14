/* eslint-env mocha */

import assert from 'assert'
import quartersToYears from '.'

describe('quartersToYears', function () {
  it('converts 3 quarters to years', function () {
    const result = quartersToYears(3)
    assert(result === 0)
  })

  it('converts 5 quarters to years', function () {
    const result = quartersToYears(5)
    assert(result === 1)
  })

  it('converts 13 quarters to years', function () {
    const result = quartersToYears(13)
    assert(result === 3)
  })
})
