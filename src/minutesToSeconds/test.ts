/* eslint-env mocha */

import assert from 'assert'
import minutesToSeconds from '.'

describe('minutesToSeconds', function () {
  it('converts 1 minute to seconds', function () {
    const result = minutesToSeconds(1)
    assert(result === 60)
  })

  it('converts 3 minutes to seconds', function () {
    const result = minutesToSeconds(3)
    assert(result === 180)
  })

  it('converts 5 minutes to seconds', function () {
    const result = minutesToSeconds(5)
    assert(result === 300)
  })
})
