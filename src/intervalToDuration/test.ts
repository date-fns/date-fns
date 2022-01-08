/* eslint-env mocha */

import assert from 'assert'
import intervalToDuration from '.'

describe('intervalToDuration', () => {
  it('returns correct duration for arbitrary dates', () => {
    const start = new Date(1929, 0, 15, 12, 0, 0)
    const end = new Date(1968, 3, 4, 19, 5, 0)
    const result = intervalToDuration({ start, end })

    assert.deepStrictEqual(result, {
      years: 39,
      months: 2,
      days: 20,
      hours: 7,
      minutes: 5,
      seconds: 0,
    })
  })

  it('returns correct duration (1 of everything)', () => {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2021, 3, 2, 13, 1, 1)
    const result = intervalToDuration({ start, end })

    assert.deepStrictEqual(result, {
      years: 1,
      months: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    })
  })

  it('returns duration of 0 when the dates are the same', () => {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2020, 2, 1, 12, 0, 0)
    const result = intervalToDuration({ start, end })

    assert.deepStrictEqual(result, {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  describe('throws RangeError', () => {
    it('throws error if start date is invalid', () => {
      const block = () => {
        const invalidStart = new Date(NaN)
        const end = new Date(2020, 2, 1, 12, 0, 0)
        intervalToDuration({ start: invalidStart, end })
      }
      assert.throws(block, RangeError, 'Start Date is invalid')
    })

    it('throws error if end date is invalid', () => {
      const block = () => {
        const start = new Date(2020, 2, 1, 12, 0, 0)
        const invalidEnd = new Date(NaN)
        intervalToDuration({ start, end: invalidEnd })
      }
      assert.throws(block, RangeError, 'End Date is invalid')
    })
  })

  describe('edge cases', () => {
    it('returns correct duration for dates in the end of Feb - issue 2255', () => {
      assert.deepStrictEqual(
        intervalToDuration({
          start: new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          end: new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
        }),
        {
          years: 0,
          months: 0,
          days: 1,
          hours: 1,
          minutes: 0,
          seconds: 0,
        }
      )

      assert.deepStrictEqual(
        intervalToDuration({
          start: new Date(2012, 1 /* Feb */, 29, 9, 0, 0),
          end: new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
        }),
        {
          years: 0,
          months: 0,
          days: 0,
          hours: 1,
          minutes: 0,
          seconds: 0,
        }
      )

      assert.deepStrictEqual(
        intervalToDuration({
          start: new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          end: new Date(2012, 1 /* Feb */, 28, 10, 0, 0),
        }),
        {
          years: 0,
          months: 0,
          days: 0,
          hours: 1,
          minutes: 0,
          seconds: 0,
        }
      )

      // Issue 2261
      assert.deepStrictEqual(
        intervalToDuration({
          start: new Date(2021, 1 /* Feb */, 28, 7, 23, 7),
          end: new Date(2021, 1 /* Feb */, 28, 7, 38, 18),
        }),
        {
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 15,
          seconds: 11,
        }
      )
    })
  })
})
