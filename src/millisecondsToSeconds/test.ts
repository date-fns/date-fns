/* eslint-env mocha */

import assert from 'assert'
import millisecondsToSeconds from '.'

describe('millisecondsToSeconds', function () {
  it('converts 700 milliseconds to seconds', function () {
    const result = millisecondsToSeconds(700)
    assert.deepStrictEqual(result, 0)
  })

  it('converts 1500 milliseconds to seconds', function () {
    const result = millisecondsToSeconds(1500)
    assert.deepStrictEqual(result, 1)
  })

  it('converts 3500 milliseconds to seconds', function () {
    const result = millisecondsToSeconds(3500)
    assert.deepStrictEqual(result, 3)
  })

  it('converts 5500 milliseconds to seconds', function () {
    const result = millisecondsToSeconds(5500)
    assert.deepStrictEqual(result, 5)
  })
})
