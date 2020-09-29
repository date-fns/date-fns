// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon, { SinonFakeTimers } from 'sinon'
import endOfToday from '.'

describe('endOfToday', () => {
  let clock: SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns the current date with the time settled to 23:59:59.999', () => {
    const result = endOfToday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25, 23, 59, 59, 999))
  })
})
