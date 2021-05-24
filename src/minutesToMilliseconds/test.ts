/* eslint-env mocha */

import assert from 'assert'
import minutesToMilliseconds from '.'

describe('minutesToMilliseconds', function () {
  it('converts minutes to milliseconds', function () {
    assert(minutesToMilliseconds(1) === 60000)
    assert(minutesToMilliseconds(2) === 120000)
  })

  it('handles border values', () => {
    assert(minutesToMilliseconds(1.5) === 90000)
    assert(minutesToMilliseconds(0) === 0)
  })
})
