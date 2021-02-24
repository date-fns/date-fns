// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import isFuture from '.'

describe('isFuture', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is in the future', () => {
    const result = isFuture(new Date(2014, 9 /* Oct */, 31))
    assert(result === true)
  })

  it('returns false if the given date is in the past', () => {
    const result = isFuture(new Date(2014, 8 /* Sep */, 1))
    assert(result === false)
  })

  it('returns false if the given date is now', () => {
    const result = isFuture(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isFuture(new Date(2014, 9 /* Oct */, 31).getTime())
    assert(result === true)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(isFuture.bind(null), TypeError)
  })
})
