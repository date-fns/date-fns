/* eslint-env mocha */

import assert from 'assert'
import minutesToMilliseconds from '.'

describe('minutesToMilliseconds', function () {
  it('converts 1 minute to milliseconds', function () {
    const result = minutesToMilliseconds(1)
    assert.deepStrictEqual(result, 60000)
  })

  it('converts 3 minutes to milliseconds', function () {
    const result = minutesToMilliseconds(3)
    assert.deepStrictEqual(result, 180000)
  })

  it('converts 5 minutes to milliseconds', function () {
    const result = minutesToMilliseconds(5)
    assert.deepStrictEqual(result, 300000)
  })
})
