/* eslint-env mocha */

import assert from 'assert'
import hoursToMilliseconds from '.'

describe('hoursToMilliseconds', function () {
  it('converts hours to milliseconds', function () {
    assert(hoursToMilliseconds(1) === 3600000)
    assert(hoursToMilliseconds(2) === 7200000)
  })

  it('handles border values', () => {
    assert(hoursToMilliseconds(1.5) === 5400000)
    assert(hoursToMilliseconds(0) === 0)
  })
})
