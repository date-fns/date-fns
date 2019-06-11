// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import startOfYesterday from '.'

describe('startOfYesterday', function() {
  it('returns the start of yesterday', function() {
    const clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )

    var result = startOfYesterday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 24))

    clock.restore()
  })

  it('handles dates before 100 AD', function() {
    var now = new Date(0)
    now.setFullYear(14, 8 /* Sep */, 25, 14, 30, 45, 500)
    now.setHours(0, 0, 0, 0)
    const clock = sinon.useFakeTimers(now.getTime())

    var expectedResult = new Date(0)
    expectedResult.setFullYear(14, 8 /* Sep */, 24)
    expectedResult.setHours(0, 0, 0, 0)
    var result = startOfYesterday()
    assert.deepEqual(result, expectedResult)

    clock.restore()
  })
})
