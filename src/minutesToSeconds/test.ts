/* eslint-env mocha */

import assert from 'assert'
import minutesToSeconds from '.'

describe('minutesToSeconds', function () {
  it('converts minutes to seconds', function () {
    assert(minutesToSeconds(1) === 60)
    assert(minutesToSeconds(2) === 120)
  })

  it('handles border values', () => {
    assert(minutesToSeconds(1.5) === 90)
    assert(minutesToSeconds(0) === 0)
  })
})
