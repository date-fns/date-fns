/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isThisHour from '.'

describe('isThisHour', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same hour', () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18)
    assert(isThisHour(date))
  })

  it('returns false if the given date and the current date have different hours', () => {
    const date = new Date(2014, 8 /* Sep */, 25, 19)
    assert(!isThisHour(date))
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 45).getTime()
    assert(isThisHour(date))
  })
})
