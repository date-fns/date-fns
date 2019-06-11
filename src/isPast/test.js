// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import isPast from '.'

describe('isPast', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is in the past', () => {
    var result = isPast(new Date(2014, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('returns false if the given date is in the future', () => {
    var result = isPast(new Date(2014, 11 /* Dec */, 31))
    assert(result === false)
  })

  it('returns false if the given date is now', () => {
    var result = isPast(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    var result = isPast(new Date(2014, 6 /* Jul */, 2).getTime())
    assert(result === true)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(isPast.bind(null), TypeError)
  })
})
