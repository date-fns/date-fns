/* eslint-env mocha */

import assert from 'assert'
import secondsToMilliseconds from '.'

describe('secondsToMilliseconds', function () {
  it('converts 1 second to milliseconds', function () {
    const result = secondsToMilliseconds(1)
    assert(result === 1000)
  })

  it('converts 3 seconds to milliseconds', function () {
    const result = secondsToMilliseconds(3)
    assert(result === 3000)
  })

  it('converts 5 seconds to milliseconds', function () {
    const result = secondsToMilliseconds(5)
    assert(result === 5000)
  })
})
