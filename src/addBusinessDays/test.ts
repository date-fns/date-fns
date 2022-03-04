// @flow
/* eslint-env mocha */

import assert from 'assert'
import addBusinessDays from '.'

describe('addBusinessDays', function () {
  it('adds the given number of business days', function () {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('handles negative amount', function () {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 15), -10)
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

  it('can include Saturday in businessDays', function () {
    const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 8, {
      businessDays: [1, 2, 3, 4, 5, 6],
    })
    assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
  })

  it('can include Sunday in businessDays', function () {
    const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 8, {
      businessDays: [0, 1, 2, 3, 4, 5],
    })
    assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
  })

  it('can include Saturday and Sunday in businessDays', function () {
    const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 10, {
      businessDays: [0, 1, 2, 3, 4, 5, 6],
    })
    assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
  })

  describe('exceptions', () => {
    it('can add exceptions to include days as businessDays that otherwise would not be included', function () {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 10, {
        exceptions: { '01/08/22': true, '01/09/22': true },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 19))
    })

    it('can take in a list of disabling exceptions', () => {
      // Given we have business days of Monday through Friday
      // and exceptions saying we won't work the next two Mondays (10th and 17th)

      // When we try and add 10 business days from Thursday, the 6th
      const result = addBusinessDays(new Date(2022, 0, 7), 10, {
        exceptions: {
          '01/17/2022': false,
          '01/10/2022': false,
        },
      })

      // Then we expect to receive a result of monday the 24th
      assert.deepStrictEqual(result, new Date(2022, 0, 25))
    })

    it('can add exceptions and does not include dates not within range', function () {
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 10, {
        exceptions: { '01/01/22': true, '01/09/22': true, '01/30/22': true },
      })

      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 20))
    })

    it('can ignore noop exceptions', function () {
      // Given we have business days of Monday to Friday
      // and an exception saying "I'm working on Monday"

      // When we try and add 10 business days
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 10, {
        exceptions: { '01/10/22': true },
      })

      // Then we expect to ignore the no-op exception
      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 21))
    })

    it('can override business days with exceptions', function () {
      // Given business days of Monday - Saturday
      // And exceptions over one weekend

      // When we add 8 business days
      const result = addBusinessDays(new Date(2022, 1 /* Feb */, 9), 9, {
        businessDays: [1, 2, 3, 4, 5, 6],
        exceptions: {
          '02/12/22': false,
          '02/13/22': false,
          '02/19/22': false,
        },
      })

      // Then we expect to have the working Saturdays ignored
      assert.deepStrictEqual(result, new Date(2022, 1, 22))
    })

    it('can override business days with exceptions over weekends', function () {
      // Given business days of Monday - Saturday
      // And exceptions over two weekends

      // When we add 8 business days
      const result = addBusinessDays(new Date(2022, 1 /* Feb */, 9), 8, {
        businessDays: [1, 2, 3, 4, 5, 6],
        exceptions: {
          '02/12/22': false,
          '02/19/22': false,
        },
      })

      // Then we expect to have the working Saturdays ignored
      assert.deepStrictEqual(result, new Date(2022, 1 /* Feb */, 21))
    })

    it('can handle a large amount of enabled Saturday exceptions', function () {
      // Given business days of M-F and a large number of working saturdays
      const exceptions = {
        '01/08/22': true,
        '01/15/22': true,
        '01/22/22': true,
        '01/29/22': true,
        '02/05/22': true,
        '02/12/22': true,
      }

      // When we try and add 36 business days
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 3), 36, {
        exceptions,
      })

      // Then we expect to account for all exceptions
      assert.deepStrictEqual(result, new Date(2022, 1 /* Feb */, 14))
    })

    it('can handle a large amount of disabled Saturday exceptions', function () {
      // Given business days of M-Sat and a large number of non-working saturdays
      const exceptions = {
        '01/08/22': false,
        '01/15/22': false,
        '01/22/22': false,
        '01/29/22': false,
        '02/05/22': false,
        '02/12/22': false,
      }
      const businessDays = [1, 2, 3, 4, 5, 6]

      // When we try and add 30 business days
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 3), 30, {
        exceptions,
        businessDays,
      })

      // Then we expect to account for all exceptions
      assert.deepStrictEqual(result, new Date(2022, 1 /* Feb */, 14))
    })

    it('can handle a large amount of disabled Sunday exceptions', function () {
      // Given business days of Sunday - Friday and a large number of non-working Sundays
      const exceptions = {
        '01/09/22': false,
        '01/16/22': false,
        '01/23/22': false,
        '01/30/22': false,
        '02/06/22': false,
        '02/13/22': false,
      }
      const businessDays = [0, 1, 2, 3, 4, 5]

      // When we try and add 30 business days
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 3), 30, {
        exceptions,
        businessDays,
      })

      // Then we expect to account for all exceptions
      assert.deepStrictEqual(result, new Date(2022, 1 /* Feb */, 14))
    })

    it('can handle a large amount of enabled Sunday exceptions', function () {
      // Given business days of Monday - Friday and a large number of working Sundays
      const exceptions = {
        '01/09/22': true,
        '01/16/22': true,
        '01/23/22': true,
        '01/30/22': true,
        '02/06/22': true,
        '02/13/22': true,
      }
      const businessDays = [1, 2, 3, 4, 5]

      // When we try and add 36 business days
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 3), 36, {
        exceptions,
        businessDays,
      })

      // Then we expect to account for all exceptions
      assert.deepStrictEqual(result, new Date(2022, 1 /* Feb */, 14))
    })

    it('can handle a large amount of disabled exceptions', function () {
      // Given business days of Sunday - Saturday and a large number of non-working weekends
      const exceptions = {
        '01/08/22': false,
        '01/16/22': false,
        '01/22/22': false,
        '01/30/22': false,
        '02/05/22': false,
        '02/13/22': false,
      }
      const businessDays = [0, 1, 2, 3, 4, 5, 6]

      // When we try and add 36 business days
      const result = addBusinessDays(new Date(2022, 0 /* Jan */, 3), 36, {
        exceptions,
        businessDays,
      })

      // Then we expect to account for all exceptions
      assert.deepStrictEqual(result, new Date(2022, 1 /* Feb */, 14))
    })
  })

  it('can handle a large number of business days', function () {
    // @ts-ignore
    if (typeof this.timeout === 'function') {
      // @ts-ignore
      this.timeout(500 /* 500 ms test timeout */)
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

  it('throws TypeError exception if passed less than 2 arguments', function () {
    // @ts-expect-error
    assert.throws(addBusinessDays.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addBusinessDays.bind(null, 1), TypeError)
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

  it('if custom businessDays are Monday and Wednesday, it returns the Wednesday when 2 days is added on the Sunday', function () {
    assert.deepStrictEqual(
      addBusinessDays(new Date(2020, 0 /* Jan */, 12), 2 /* Sunday */, {
        businessDays: [1, 3],
      }),
      new Date(2020, 0 /* Jan */, 15) // Wednesday
    )
  })

  it('still works if you add extra businessDays numbers greater than 6', function () {
    const result = addBusinessDays(new Date(2022, 0 /* Jan */, 7), 10, {
      businessDays: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    })
    assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 17))
  })
})
