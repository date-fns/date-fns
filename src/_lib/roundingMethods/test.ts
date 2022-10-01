/* eslint-env mocha */

import assert from 'assert'
import { getRoundingMethod, roundingMap } from './index'

describe('getRoundingMethod', () => {
  it('should return default rounding method if param is undefined', () => {
    const method = getRoundingMethod(undefined)
    assert.strictEqual(method, roundingMap.trunc)
  })

  it('should return corresponding rounding method', () => {
    let method = getRoundingMethod('ceil')
    assert.strictEqual(method, roundingMap.ceil)

    method = getRoundingMethod('round')
    assert.strictEqual(method, Math.round)

    method = getRoundingMethod('floor')
    assert.strictEqual(method, Math.floor)
  })
})
