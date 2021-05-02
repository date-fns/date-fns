/* eslint-env mocha */

import assert from 'assert'
import hoursToMinutes from '.'

describe('hoursToMinutes', function () {
  it('converts 2 hours to minutes', function () {
    const result = hoursToMinutes(2)
    assert.deepStrictEqual(result, 120)
  })

  it('converts 5 hours to minutes', function () {
    const result = hoursToMinutes(5)
    assert.deepStrictEqual(result, 300)
  })

  it('converts 7 hours to minutes', function () {
    const result = hoursToMinutes(7)
    assert.deepStrictEqual(result, 420)
  })
})
