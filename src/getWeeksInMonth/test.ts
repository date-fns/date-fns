/* eslint-env mocha */

import assert from 'assert'
import getWeeksInMonth from '.'

describe('getWeeksInMonth', () => {
  it('returns the number of calendar weeks the month in the given date spans', () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0))
    assert(result === 4)
  })

  it('allows to specify which day is the first day of the week', () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
      weekStartsOn: 1,
    })
    assert(result === 5)
  })

  it('allows to specify which day is the first day of the week in locale', () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1 },
      },
    })
    assert(result === 5)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
      weekStartsOn: 1,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0 },
      },
    })
    assert(result === 5)
  })

  it('accepts timestamps', () => {
    const result = getWeeksInMonth(
      new Date(2017, 3 /* Apr */, 8, 18, 0).getTime()
    )
    assert(result === 6)
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    getWeeksInMonth(date)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns NaN if the date is `Invalid Date`', () => {
    const result = getWeeksInMonth(new Date(NaN))
    assert(isNaN(result))
  })
})
