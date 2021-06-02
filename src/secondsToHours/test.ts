/* eslint-env mocha */

import assert from 'assert'
import secondsToHours from '.'

describe('secondsToHours', function () {
  it('converts seconds to hours', function () {
    assert(secondsToHours(3600) === 1)
    assert(secondsToHours(7200) === 2)
  })

  it('uses floor rounding', () => {
    assert(secondsToHours(3601) === 1)
    assert(secondsToHours(3599) === 0)
  })

  it('handles border values', () => {
    assert(secondsToHours(3600.5) === 1)
    assert(secondsToHours(0) === 0)
  })
})
