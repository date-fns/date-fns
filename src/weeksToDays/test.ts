/* eslint-env mocha */

import assert from 'assert'
import weeksToDays from '.'

describe('weeksToDays', function () {
  it('converts 1 week to days', function () {
    const result = weeksToDays(1)
    assert.deepStrictEqual(result, 7)
  })

  it('converts 3 weeks to days', function () {
    const result = weeksToDays(3)
    assert.deepStrictEqual(result, 21)
  })

  it('converts 5 weeks to days', function () {
    const result = weeksToDays(5)
    assert.deepStrictEqual(result, 35)
  })
})
