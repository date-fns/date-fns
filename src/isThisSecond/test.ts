// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isThisSecond from '.'

describe('isThisSecond', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same second', () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15)
    assert(isThisSecond(date) === true)
  })

  it('returns false if the given date and the current date have different seconds', () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30, 16)
    assert(isThisSecond(date) === false)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 250).getTime()
    assert(isThisSecond(date) === true)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    // @ts-expect-error
    assert.throws(isThisSecond.bind(null), TypeError)
  })
})
