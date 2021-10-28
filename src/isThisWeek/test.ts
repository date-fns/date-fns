/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isThisWeek from '.'

describe('isThisWeek', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same week', () => {
    const date = new Date(2014, 8 /* Sep */, 21)
    assert(isThisWeek(date))
  })

  it('returns false if the given date and the current date have different weeks', () => {
    const date = new Date(2014, 8 /* Sep */, 29)
    assert(!isThisWeek(date))
  })

  it('allows to specify which day is the first day of the week', () => {
    const date = new Date(2014, 8 /* Sep */, 28)
    assert(isThisWeek(date, { weekStartsOn: 1 }))
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 21).getTime()
    assert(isThisWeek(date))
  })
})
