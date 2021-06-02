/* eslint-env mocha */

import assert from 'assert'
import millisecondsToSeconds from '.'

describe('millisecondsToSeconds', function () {

  it('converts milliseconds to seconds', function () {
    assert(millisecondsToSeconds(1000) === 1)
    assert(millisecondsToSeconds(2000) === 2)
  })

  it('uses floor rounding', () => {
    assert(millisecondsToSeconds(1001) === 1)
    assert(millisecondsToSeconds(999) === 0)
  })

  it('handles border values', () => {
    assert(millisecondsToSeconds(1000.5) === 1)
    assert(millisecondsToSeconds(0) === 0)
  })
})
