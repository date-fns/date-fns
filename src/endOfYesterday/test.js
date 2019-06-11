// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import endOfYesterday from '.'

describe('endOfYesterday', () => {
  it('returns yesterday with the time setted to 23:59:59.999', () => {
    const clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )

    var result = endOfYesterday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 24, 23, 59, 59, 999))

    clock.restore()
  })

  it('handles dates before 100 AD', () => {
    var now = new Date(0)
    now.setFullYear(14, 8 /* Sep */, 25)
    now.setHours(14, 30, 45, 500)
    const clock = sinon.useFakeTimers(now.getTime())

    var expectedResult = new Date(0)
    expectedResult.setFullYear(14, 8 /* Sep */, 24)
    expectedResult.setHours(23, 59, 59, 999)
    var result = endOfYesterday()
    assert.deepEqual(result, expectedResult)

    clock.restore()
  })
})
