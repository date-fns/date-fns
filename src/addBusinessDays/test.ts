/* eslint-env mocha */

import assert from 'assert'
import addBusinessDays from './index'

describe('addBusinessDays', function () {
  it('adds the given number of business days', function () {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('handles negative amount', function () {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 15), -10)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles 0 amount', function () {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 0)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns the Monday when 1 day is added on the Friday', () => {
    assert.deepStrictEqual(
      addBusinessDays(new Date(2020, 0 /* Jan */, 10), 1), // Friday
      new Date(2020, 0 /* Jan */, 13) // Monday
    )
  })

  it('returns the Monday when 1 day is added on the Satuday', () => {
    assert.deepStrictEqual(
      addBusinessDays(new Date(2020, 0 /* Jan */, 11), 1), // Saturday
      new Date(2020, 0 /* Jan */, 13) // Monday
    )
  })

  it('returns the Monday when 1 day is added on the Sunday', () => {
    assert.deepStrictEqual(
      addBusinessDays(new Date(2020, 0 /* Jan */, 12), 1), // Sunday
      new Date(2020, 0 /* Jan */, 13) // Monday
    )
  })

  describe('can add Saturdays and/or Sundays to working days with the businessDays option', () => {
    it('given an initial date of Jan 7 and adding 8 days, with businessDay = [1, 2, 3, 4, 5, 6], should return Jan 17, 2022', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 8, {
        businessDays: [1, 2, 3, 4, 5, 6],
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
    })

    it('given an initial date of Jan 7 and adding 8 days, with businessDay = [0, 1, 2, 3, 4, 5], should return Jan 17, 2022', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 8, {
        businessDays: [0, 1, 2, 3, 4, 5],
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
    })

    it('given an initial date of Jan 7 and adding 10 days, with businessDay = [0, 1, 2, 3, 4, 5, 6], should return Jan 17, 2022', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 10, {
        businessDays: [0, 1, 2, 3, 4, 5, 6],
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
    })
  })

  describe('exceptions', () => {
    it('handles true exceptions', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 10, {
        businessDays: [1, 2, 3, 4, 5], // M-F
        exceptions: { '01/08/22': true, '01/09/22': true },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 19))
    })

    it('handles false exceptions on Mondays', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 9, {
        businessDays: [1, 2, 3, 4, 5], // M-F
        exceptions: { '01/10/22': false, '01/17/22': false },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 24))
    })

    it('handles false exceptions on Saturdays', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 12, {
        businessDays: [1, 2, 3, 4, 5, 6], // M-Sat
        exceptions: { '01/08/22': false, '01/15/22': false },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 24))
    })

    it('handles a mix of true and false exceptions', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 13, {
        businessDays: [1, 2, 3, 4, 5, 6], //M-Sat
        exceptions: {
          '01/08/22': false, // Sat
          '01/09/22': true, // Sun
          '01/10/22': true, // Mon (should be ignored since it's already a working day)
          '01/15/22': true, // Sat (should be ignored since it's already a working day)
          '01/16/22': false, // Sun (should be ignored since it's already a non-working day)
          '01/17/22': false, // Mon
        },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 24))
    })

    it('ignores exceptions that are out of range', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 10, {
        businessDays: [1, 2, 3, 4, 5],
        exceptions: { '01/01/22': true, '01/09/22': true, '01/30/22': true },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 20))
    })

    it('moves to the following day when ending on a non-working weekend with a true Saturday exception', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 5), 4, {
        businessDays: [1, 2, 3, 4, 5], // M-F
        exceptions: { '01/08/22': true },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 10))
    })

    it('handles true Sunday exceptions', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 5), 5, {
        businessDays: [1, 2, 3, 4, 5, 6], //M-Sat
        exceptions: { '01/09/22': true },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 10))
    })

    it('ends on a true exception', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 5), 4, {
        businessDays: [1, 2, 3, 4, 5, 6], //M-Sat
        exceptions: { '01/09/22': true },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 9))
    })

    it('should move to following Monday when ending on a false exception', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 5, {
        businessDays: [1, 2, 3, 4, 5], //M-F
        exceptions: { '01/14/22': false },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
    })

    it('starts on a non-working Saturday and ends on a false exception, should move to following Monday', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 8), 5, {
        businessDays: [1, 2, 3, 4, 5], //M-F
        exceptions: { '01/14/22': false },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
    })

    it('starts on a false exception', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 5, {
        businessDays: [1, 2, 3, 4, 5], //M-F
        exceptions: { '01/07/22': false },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 14))
    })

    it('starts on a true exception', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 8), 5, {
        businessDays: [1, 2, 3, 4, 5], //M-F
        exceptions: { '01/08/22': true },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 14))
    })

    it('starts and ends on false exceptions, should move to the following working day', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 8), 6, {
        businessDays: [1, 2, 3, 4, 5, 6], //M-Sat
        exceptions: { '01/08/22': false, '01/15/22': false },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
    })

    it('starts and ends on true exceptions', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 8), 6, {
        businessDays: [1, 2, 3, 4, 5], //M-F
        exceptions: { '01/08/22': true, '01/15/22': true },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 15))
    })

    it('handles a large number of working Saturday exceptions, including some out of range', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 3), 36, {
        businessDays: [1, 2, 3, 4, 5], //M-F
        exceptions: {
          '01/08/22': true,
          '01/15/22': true,
          '01/22/22': true,
          '01/29/22': true,
          '02/05/22': true,
          '02/12/22': true,
          '02/19/22': true, // out of range, not incl
        },
      })

      assert.deepStrictEqual(result, new Date(2022, 1 /* Jan */, 14))
    })

    it('handles a large number of working Saturday exceptions when Sundays are working days', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 3), 40, {
        businessDays: [0, 1, 2, 3, 4, 5], //Sun-F
        exceptions: {
          '01/08/22': true,
          '01/15/22': true,
          '01/22/22': true,
          '01/29/22': true,
          '02/05/22': true,
          '02/12/22': true,
          '02/19/22': true, // out of range, not incl
        },
      })

      assert.deepStrictEqual(result, new Date(2022, 1 /* Jan */, 12))
    })

    it('handles a large number of excluded Saturday exceptions, including some out of range', () => {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 3), 36, {
        businessDays: [1, 2, 3, 4, 5, 6], //M-Sat
        exceptions: {
          '01/08/22': false,
          '01/15/22': false,
          '01/22/22': false,
          '01/29/22': false,
          '02/05/22': false,
          '02/12/22': false,
          '02/19/22': false, // out of range, not incl
        },
      })

      assert.deepStrictEqual(result, new Date(2022, 1 /* Jan */, 22))
    })
  })

  it('can handle a large number of business days', function () {
    // @ts-ignore
    if (typeof global.timeout === 'function') {
      // @ts-ignore
      global.timeout(500 /* 500 ms test timeout */)
    }

    const result = addBusinessDays(new Date(2014, 0 /* Jan */, 1), 3387885)
    assert.deepStrictEqual(result, new Date(15000, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', function () {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('converts a fractional number to an integer', function () {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 10.5)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('implicitly converts number arguments', function () {
    // @ts-expect-error
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), '10')
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 8 /* Sep */, 1)
    addBusinessDays(date, 11)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = addBusinessDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('starting from a Sunday should land on a weekday when reducing a divisible by 5', function () {
    const substractResult = addBusinessDays(new Date(2019, 7, 18), -5)
    assert.deepStrictEqual(substractResult, new Date(2019, 7, 12))

    const addResult = addBusinessDays(new Date(2019, 7, 18), 5)
    assert.deepStrictEqual(addResult, new Date(2019, 7, 23))
  })

  it('starting from a Saturday should land on a weekday when reducing a divisible by 5', function () {
    const substractResult = addBusinessDays(new Date(2019, 7, 17), -5)
    assert.deepStrictEqual(substractResult, new Date(2019, 7, 12))

    const addResult = addBusinessDays(new Date(2019, 7, 17), 5)
    assert.deepStrictEqual(addResult, new Date(2019, 7, 23))
  })

  it('if custom businessDays are Tuesday to Friday, it should return the Tuesday when 1 day is added on the Saturday ', function () {
    assert.deepStrictEqual(
      addBusinessDays(new Date(2020, 0 /* Jan */, 10), 1 /* Friday */, {
        businessDays: [2, 3, 4, 5],
      }),
      new Date(2020, 0 /* Jan */, 14) // Tuesday
    )
  })

  it('if custom businessDays are Monday and Wednesday, it returns the Wednesday when 2 days are added on the Sunday', function () {
    assert.deepStrictEqual(
      addBusinessDays(new Date(2020, 0 /* Jan */, 12), 2 /* Sunday */, {
        businessDays: [1, 3],
      }),
      new Date(2020, 0 /* Jan */, 15) // Wednesday
    )
  })

  it('throws RangeError if businessDays contains numbers greater than 6', function () {
    const block = addBusinessDays.bind(null, new Date(2022, 0, 7), 10, {
      businessDays: [3, 4, 5, 6, 7],
    })

    assert.throws(block, RangeError)
  })

  it('can handle passing in the same number multiple times', function () {
    const result = addBusinessDays(new Date(2022, 0 /* Jan */, 3), 20, {
      businessDays: [1, 2, 3, 4, 5, 5, 5],
    })

    assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 31))
  })
})
