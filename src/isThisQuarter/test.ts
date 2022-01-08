/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isThisQuarter from '.'

describe('isThisQuarter', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same quarter (and year)', () => {
    const date = new Date(2014, 6 /* Jul */, 2)
    assert(isThisQuarter(date) === true)
  })

  it('returns false if the given date and the current date have different quarters', () => {
    const date = new Date(2014, 1 /* Feb */, 11)
    assert(isThisQuarter(date) === false)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    assert(isThisQuarter(date) === true)
  })
})
