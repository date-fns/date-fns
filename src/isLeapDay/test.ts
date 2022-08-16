/* eslint-env mocha */

import assert from 'assert'
import isLeapDay from './index'

describe('isLeapDay', () => {
  it('returns true if the given date is a leap day', () => {
    const result = isLeapDay(new Date(2012, 1 /* Feb */, 29))
    assert(result === true)
  })

  it('returns false if the given date is not a leap day', () => {
    const result = isLeapDay(new Date(2014, 1 /* Feb */, 29))
    assert(result === false)
  })

  it('works for the years divisible by 100 but not by 400', () => {
    const result = isLeapDay(new Date(2100, 1 /* Feb */, 29))
    assert(result === false)
  })

  it('works for the years divisible by 400', () => {
    const result = isLeapDay(new Date(2000, 1 /* Feb */, 29))
    assert(result === true)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2012, 1 /* Feb */, 29).getTime()
    const result = isLeapDay(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isLeapDay(new Date(NaN))
    assert(result === false)
  })
})
