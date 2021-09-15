/* eslint-env mocha */

import assert from 'assert'
import secondsToMilliseconds from '.'

describe('secondsToMilliseconds', function () {
  it('converts seconds to milliseconds', function () {
    assert(secondsToMilliseconds(1) === 1000)
    assert(secondsToMilliseconds(2) === 2000)
  })

  it('handles border values', () => {
    assert(secondsToMilliseconds(1.5) === 1500)
    assert(secondsToMilliseconds(0) === 0)
  })
})
