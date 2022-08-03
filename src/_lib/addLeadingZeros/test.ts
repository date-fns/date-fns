/* eslint-env mocha */

import assert from 'assert'
import addLeadingZeros from './index'

describe('addLeadingZeros', () => {
  it('adds leading zeros when number has fewer digits than target length', () => {
    assert.strictEqual(addLeadingZeros(7, 3), '007')
    assert.strictEqual(addLeadingZeros(7, 2), '07')
    assert.strictEqual(addLeadingZeros(7, 1), '7')
    assert.strictEqual(addLeadingZeros(7, 0), '7')
    assert.strictEqual(addLeadingZeros(7, -1), '7')
  })
})
