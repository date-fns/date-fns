// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import endOfTomorrow from '.'

describe('endOfTomorrow', function() {
  it('returns tomorrow with the time settled to 23:59:59.999', function() {
    const clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )

    const result = endOfTomorrow()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 26, 23, 59, 59, 999))

    clock.restore()
  })

  it('handles dates before 100 AD', function() {
    const now = new Date(0)
    now.setFullYear(14, 8 /* Sep */, 25)
    now.setHours(14, 30, 45, 500)
    const clock = sinon.useFakeTimers(now.getTime())

    const expectedResult = new Date(0)
    expectedResult.setFullYear(14, 8 /* Sep */, 26)
    expectedResult.setHours(23, 59, 59, 999)
    const result = endOfTomorrow()
    assert.deepEqual(result, expectedResult)

    clock.restore()
  })
})
