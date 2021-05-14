/* eslint-env mocha */

import assert from 'assert'
import secondsToHours from '.'

describe('secondsToHours', function () {
  it('converts 3000 seconds to hours', function () {
    const result = secondsToHours(3000)
    assert(result === 0)
  })

  it('converts 3700 seconds to hours', function () {
    const result = secondsToHours(3700)
    assert(result === 1)
  })

  it('converts 11000 seconds to hours', function () {
    const result = secondsToHours(11000)
    assert(result === 3)
  })

  it('converts 19000 seconds to hours', function () {
    const result = secondsToHours(19000)
    assert(result === 5)
  })
})
