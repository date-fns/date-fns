// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import startOfTomorrow from '.'

describe('startOfTomorrow', function() {
  it('returns the start of tomorrow', function() {
    const clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )

    const result = startOfTomorrow()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 26))

    clock.restore()
  })

  it('handles dates before 100 AD', function() {
    const now = new Date(0)
    now.setFullYear(14, 8 /* Sep */, 25)
    now.setHours(0, 0, 0, 0)
    const clock = sinon.useFakeTimers(now.getTime())

    const expectedResult = new Date(0)
    expectedResult.setFullYear(14, 8 /* Sep */, 26)
    expectedResult.setHours(0, 0, 0, 0)
    const result = startOfTomorrow()
    assert.deepEqual(result, expectedResult)

    clock.restore()
  })
})
