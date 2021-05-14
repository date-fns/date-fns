/* eslint-env mocha */

import assert from 'assert'
import daysToWeeks from '.'

describe('daysToWeeks', function () {
  it('converts 5 days to weeks', function () {
    const result = daysToWeeks(5)
    assert(result === 0)
  })

  it('converts 8 days to weeks', function () {
    const result = daysToWeeks(8)
    assert(result === 1)
  })

  it('converts 13 days to weeks', function () {
    const result = daysToWeeks(13)
    assert(result === 1)
  })

  it('converts 15 days to weeks', function () {
    const result = daysToWeeks(15)
    assert(result === 2)
  })
})
