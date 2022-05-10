/* eslint-env mocha */

import assert from 'assert'
import formatDuration from '.'
import { resetDefaultLocale } from '../_lib/test'
import enUS from '../locale/en-US'
import eo from '../locale/eo'
import setDefaultLocale from '../setDefaultLocale'

describe('formatDuration', () => {
  it('formats full duration', () => {
    assert(
      formatDuration({
        years: 2,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30,
      }) === '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds'
    )
  })

  it('formats partial duration', () => {
    assert(formatDuration({ months: 9, days: 2 }) === '9 months 2 days')
  })

  it('allows to customize the format', () => {
    assert(
      formatDuration(
        {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30,
        },
        { format: ['months', 'weeks'] }
      ) === '9 months 1 week'
    )
  })

  it('does not include zeros by default', () => {
    assert(
      formatDuration({
        years: 0,
        months: 0,
        weeks: 1,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }) === '1 week'
    )
  })

  it('allows to include zeros', () => {
    assert(
      formatDuration(
        {
          years: 0,
          months: 0,
          weeks: 1,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        { zero: true }
      ) === '0 years 0 months 1 week 0 days 0 hours 0 minutes 0 seconds'
    )
  })

  it('allows to customize the delimiter', () => {
    assert(
      formatDuration({ months: 9, days: 2 }, { delimiter: ', ' }) ===
        '9 months, 2 days'
    )
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(formatDuration.bind(null), TypeError)
  })

  describe('setDefaultLocale', () => {
    afterEach(resetDefaultLocale)

    it('uses `locale` set with `setDefaultLocale`', () => {
      setDefaultLocale(eo)
      assert.strictEqual(formatDuration({ weeks: 1 }), '1 semajno')
    })

    it('manually set locale overrides the locale set with `setDefaultLocale`', () => {
      setDefaultLocale(eo)
      assert.strictEqual(
        formatDuration({ weeks: 1 }, { locale: enUS }),
        '1 week'
      )
    })
  })
})
