/* eslint-env mocha */

import assert from 'assert'
import hoursToSeconds from '.'

describe('hoursToSeconds', function () {
  it('converts 2 hours to seconds', function () {
    const result = hoursToSeconds(2)
    assert.deepStrictEqual(result, 7200)
  })
  it('converts 5 hours to seconds', function () {
    const result = hoursToSeconds(5)
    assert.deepStrictEqual(result, 18000)
  })
  it('converts 7 hours to seconds', function () {
    const result = hoursToSeconds(7)
    assert.deepStrictEqual(result, 25200)
  })
})
