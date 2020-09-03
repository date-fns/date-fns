// @flow
/* eslint-env mocha */

import assert from 'assert'
import milliseconds from '.'

describe('milliseconds', () => {
  it('converts years to milliseconds', () => {
    const result = milliseconds({ years: 2 })
    assert(result === 63113904000)
  })

  it('converts months to milliseconds', () => {
    const result = milliseconds({ months: 3 })
    assert(result === 7889238000)
  })

  it('converts weeks to milliseconds', () => {
    const result = milliseconds({ weeks: 2 })
    assert(result === 1209600000)
  })

  it('converts days to milliseconds', () => {
    const result = milliseconds({ days: 5 })
    assert(result === 432000000)
  })

  it('converts hours to milliseconds', () => {
    const result = milliseconds({ hours: 2 })
    assert(result === 7200000)
  })

  it('converts minutes to milliseconds', () => {
    const result = milliseconds({ minutes: 5 })
    assert(result === 300000)
  })

  it('converts seconds to milliseconds', () => {
    const result = milliseconds({ seconds: 10 })
    assert(result === 10000)
  })

  it('sums all the duration values', () => {
    const result = milliseconds({
      years: 2,
      months: 3,
      weeks: 2,
      days: 5,
      hours: 2,
      minutes: 5,
      seconds: 10
    })
    assert(result === 72652252000)
  })

  it('returns 0 for an empty duration', () => {
    const result = milliseconds({})
    assert(result === 0)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    // @ts-expect-error
    assert.throws(milliseconds.bind(null), TypeError)
  })
})
