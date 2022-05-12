/* eslint-env mocha */

import assert from 'power-assert'
import differenceInBusinessDays from '.'

describe('differenceInBusinessDays', function () {
  it('returns the number of business days between the given dates, excluding weekends', function () {
    const result = differenceInBusinessDays(
      new Date(2014, 6 /* Jul */, 18),
      new Date(2014, 0 /* Jan */, 10)
    )
    assert(result === 135)
  })

  it('can handle long ranges', function () {
    // @ts-ignore
    if (typeof this.timeout === 'function') {
      // @ts-ignore
      this.timeout(500 /* 500 ms test timeout */)
    }
    const result = differenceInBusinessDays(
      new Date(15000, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1)
    )
    assert(result === 3387885)
  })

  it('the same except given first date falls on a weekend', function () {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 20),
      new Date(2019, 6 /* Jul */, 18)
    )
    assert(result === 2)
  })

  it('the same except given second date falls on a weekend', function () {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 23),
      new Date(2019, 6 /* Jul */, 20)
    )
    assert(result === 1)
  })

  it('the same except both given dates fall on a weekend', function () {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 28),
      new Date(2019, 6 /* Jul */, 20)
    )
    assert(result === 5)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    const result = differenceInBusinessDays(
      new Date(2014, 0 /* Jan */, 10),
      new Date(2014, 6 /* Jul */, 20)
    )
    assert(result === -135)
  })

  it('accepts timestamps', function () {
    const result = differenceInBusinessDays(
      new Date(2014, 6, 18).getTime(),
      new Date(2014, 0, 10).getTime()
    )
    assert(result === 135)
  })

  describe('businessDays option', function () {
    it('can include Saturday in businessDays', function () {
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 7),
        {
          businessDays: [1, 2, 3, 4, 5, 6],
        }
      )
      assert(result === 8)
    })

    it('can include Saturday in businessDays given first date falls on a non-businessDay', function () {
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 16),
        new Date(2022, 0 /* Jan */, 7),
        {
          businessDays: [1, 2, 3, 4, 5, 6],
        }
      )
      assert(result === 8)
    })

    it('can include Saturday in businessDays given second date falls on a non-businessDay', function () {
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 9),
        {
          businessDays: [1, 2, 3, 4, 5, 6],
        }
      )
      assert(result === 6)
    })

    it('can include Sunday in businessDays', function () {
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 7),
        {
          businessDays: [0, 1, 2, 3, 4, 5],
        }
      )
      assert(result === 8)
    })

    it('can include Saturday and Sunday in businessDays', function () {
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 7),
        {
          businessDays: [0, 1, 2, 3, 4, 5, 6],
        }
      )
      assert(result === 10)
    })

    it('throws RangeError if businessDays contains numbers greater than 6', function () {
      const block = differenceInBusinessDays.bind(
        null,
        new Date(2022, 0, 7),
        new Date(2022, 0, 14),
        {
          businessDays: [3, 4, 5, 6, 7],
        }
      )

      assert.throws(block, RangeError)
    })
  })

  describe('exceptions option', function () {
    it('can add true exceptions to include days as businessDays', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 7),
        {
          // Adding a Saturday and Sunday as business days
          exceptions: { '01/08/22': true, '01/09/22': true },
        }
      )

      assert(result === 8)
    })

    it('can add false exceptions to remove days as businessDays', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 7),
        {
          // Removing a Tues and Wed as business days
          exceptions: { '01/11/22': false, '01/12/22': false },
        }
      )

      assert(result === 4)
    })

    it('can handle true and false exceptions', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 7),
        {
          // Adds a Sat and Sun, removes a Tues and Wed as business days
          exceptions: {
            '01/08/22': true,
            '01/09/22': true,
            '01/11/22': false,
            '01/12/22': false,
          },
        }
      )

      assert(result === 6)
    })

    it('should only add true exceptions that are not already businessDays', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 7),
        {
          // Adding a Sat and Sun as business days, but not Mon and Tues which are already business days
          exceptions: {
            '01/08/22': true,
            '01/09/22': true,
            '01/10/22': true,
            '01/11/22': true,
          },
        }
      )

      assert(result === 8)
    })

    it('should only remove false exceptions that are businessDays', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 7),
        {
          // Removing a Tues and Wed as business days, but not Sat and Sun which are not business days
          exceptions: {
            '01/11/22': false,
            '01/12/22': false,
            '01/15/22': false,
            '01/16/22': false,
          },
        }
      )

      assert(result === 4)
    })

    it('can handle exceptions that fall on both of the argument dates', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        // Sunday
        new Date(2022, 0 /* Jan */, 16),
        // Saturday
        new Date(2022, 0 /* Jan */, 8),
        {
          // Adds business days
          exceptions: {
            '01/08/22': true,
            '01/09/22': true,
            '01/16/22': true,
          },
        }
      )

      assert(result === 7)
    })

    it('can handle true exceptions that fall on both of the argument dates, with a Sat business day', function () {
      const result = differenceInBusinessDays(
        // Sunday
        new Date(2022, 0 /* Jan */, 16),
        // Sunday
        new Date(2022, 0 /* Jan */, 9),
        {
          // with businessDays as Mon-Sat
          businessDays: [1, 2, 3, 4, 5, 6],
          // Adds two Sundays as business days
          exceptions: {
            '01/09/22': true,
            '01/16/22': true,
          },
        }
      )

      assert(result === 7)
    })

    it('can handle an exception that falls on the first date', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        // Sunday
        new Date(2022, 0 /* Jan */, 16),
        // Saturday
        new Date(2022, 0 /* Jan */, 8),
        {
          exceptions: {
            // Saturday
            '01/08/22': true,
            // Sunday
            '01/09/22': true,
          },
        }
      )

      assert(result === 6)
    })

    it('can handle an exception that falls on the second date', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        // Sunday
        new Date(2022, 0 /* Jan */, 16),
        // Saturday
        new Date(2022, 0 /* Jan */, 8),
        {
          exceptions: {
            // Saturday
            '01/09/22': true,
            // Sunday
            '01/16/22': true,
          },
        }
      )

      assert(result === 6)
    })

    it('should not add exceptions that are not within the date range', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        new Date(2022, 0 /* Jan */, 17),
        new Date(2022, 0 /* Jan */, 7),
        {
          // the first and last date are not within the date range, so they should not be added
          exceptions: {
            '01/01/22': true,
            '01/08/22': true,
            '01/09/22': true,
            '01/22/22': true,
          },
        }
      )

      assert(result === 8)
    })

    it('can handle a large amount of enabled Saturday exceptions', function () {
      // with businessDays as Mon-Fri
      const result = differenceInBusinessDays(
        new Date(2022, 1 /* Feb */, 14),
        new Date(2022, 0 /* Jan */, 3),
        {
          // the first and last date are not within the date range, so they should not be added
          exceptions: {
            '01/08/22': true,
            '01/15/22': true,
            '01/22/22': true,
            '01/29/22': true,
            '02/05/22': true,
            '02/12/22': true,
            '02/19/22': true, // extra exception that should not be included
          },
        }
      )

      assert(result === 36)
    })

    it.each`
      date1                     | date2                   | exceptions                                  | expectedDifference
      ${new Date(2018, 0, 1)}   | ${new Date(2018, 0, 8)} | ${{ '01/06/18': false, '01/07/18': false }} | ${-5}
      ${new Date(2018, 0, 1)}   | ${new Date(2018, 0, 1)} | ${{ '01/01/18': false }}                    | ${0}
      ${new Date(2017, 11, 25)} | ${new Date(2018, 0, 1)} | ${{ '12/30/17': false, '12/31/17': false }} | ${-5}
    `(
      'can handle exceptions when calculating a negative difference with false exceptions',
      function ({ date1, date2, exceptions, expectedDifference }) {
        const result = differenceInBusinessDays(date1, date2, {
          businessDays: [0, 1, 2, 3, 4, 5, 6],
          exceptions,
        })
        assert(result === expectedDifference)
      }
    )
  })

  describe('edge cases', function () {
    it('the difference is less than a day, but the given dates are in different calendar days', function () {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59)
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function () {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === -1)
    })

    it('the time values of the given dates are the same', function () {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 0, 0)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function () {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x: number) {
        return x === 0 && 1 / x < 0
      }

      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      const resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })

    it('returns NaN if the first date is `Invalid Date`', function () {
      const result = differenceInBusinessDays(
        new Date(NaN),
        new Date(2017, 0 /* Jan */, 1)
      )
      assert(isNaN(result))
    })

    it('returns NaN if the second date is `Invalid Date`', function () {
      const result = differenceInBusinessDays(
        new Date(2017, 0 /* Jan */, 1),
        new Date(NaN)
      )
      assert(isNaN(result))
    })

    it('returns NaN if the both dates are `Invalid Date`', function () {
      const result = differenceInBusinessDays(new Date(NaN), new Date(NaN))
      assert(isNaN(result))
    })

    it('throws TypeError exception if passed less than 2 arguments', function () {
      assert.throws(differenceInBusinessDays.bind(null), TypeError)
      assert.throws(differenceInBusinessDays.bind(null, 1), TypeError)
    })
  })
})
