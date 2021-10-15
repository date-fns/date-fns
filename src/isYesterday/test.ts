/* eslint-env mocha */

import { SinonFakeTimers } from 'sinon'
import assert from 'assert'
import sinon from 'sinon'
import isYesterday from '.'

describe('isYesterday', () => {
  let clock: SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Aug */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is yesterday', () => {
    const result = isYesterday(new Date(2014, 8 /* Sep */, 24))
    assert(result)
  })

  it('returns false if the given date is not yesterday', () => {
    const result = isYesterday(new Date(2014, 8 /* Sep */, 25))
    assert(!result)
  })

  it('accepts a timestamp', () => {
    const result = isYesterday(new Date(2014, 8 /* Sep */, 24).getTime())
    assert(result)
  })
})
