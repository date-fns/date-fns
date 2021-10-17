/* eslint-env mocha */

import assert from 'assert'
import addLeadingZeros from '.'

describe('addLeadingZeros', () => {
  it('adds leading zeros when number has fewer digits than target length', () => {
    assert.equal(addLeadingZeros(7, 3), '007')
    assert.equal(addLeadingZeros(7, 2), '07')
    assert.equal(addLeadingZeros(7, 1), '7')
    assert.equal(addLeadingZeros(7, 0), '7')
    assert.equal(addLeadingZeros(7, -1), '7')
  })
})
