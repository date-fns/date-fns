// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDay from '.'

describe('getDay', function() {
  it('returns the day of the week of the given date', function() {
    const result = getDay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('allows to specify which day is the first day of the week', function() {
    const result = getDay(new Date(2012, 1 /* Feb */, 29), { weekStartsOn: 1 })
    assert(result === 2)
  })

  it('allows to specify which day is the first day of the week (with a weekStartsOn of Saturday)', function() {
    const result = getDay(new Date(2012, 1 /* Feb */, 29), { weekStartsOn: 6 })
    assert(result === 4)
  })

  it('allows to specify which day is the first day of the week in locale', function() {
    const result = getDay(new Date(2012, 1 /* Feb */, 29), {
      locale: {
        options: { weekStartsOn: 1 }
      }
    })
    assert(result === 2)
  })
  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    const result = getDay(new Date(2012, 1 /* Feb */, 29), {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 }
      }
    })
    assert(result === 2)
  })

  it('accepts a timestamp', function() {
    const result = getDay(new Date(2014, 5 /* Jun */, 1).getTime())
    assert(result === 0)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getDay(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDay.bind(null), TypeError)
  })
})
