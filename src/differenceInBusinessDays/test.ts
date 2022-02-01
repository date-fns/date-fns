/* eslint-env mocha */

import assert from 'assert'
import differenceInBusinessDays from '.'

describe('differenceInBusinessDays', () => {
  it('returns the number of business days between the given dates, excluding weekends', () => {
    const result = differenceInBusinessDays(
      new Date(2014, 6 /* Jul */, 18),
      new Date(2014, 0 /* Jan */, 10)
    )
    assert.strictEqual(result, 135)
  })

  it('can handle long ranges', () => {
    // @ts-ignore
    if (typeof global.timeout === 'function') {
      // @ts-ignore
      global.timeout(500 /* 500 ms test timeout */)
    }
    const result = differenceInBusinessDays(
      new Date(15000, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1)
    )
    assert.strictEqual(result, 3387885)
  })

  it('the same except given first date falls on a weekend', () => {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 20), // Sat
      new Date(2019, 6 /* Jul */, 18) // Thu
    )
    assert.strictEqual(result, 2)
  })

  it('the same except given second date falls on a weekend', () => {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 23), // Tue
      new Date(2019, 6 /* Jul */, 20) // Sat
    )
    assert.strictEqual(result, 1)
  })

  it('the same except both given dates fall on a weekend', () => {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 28), // Sun
      new Date(2019, 6 /* Jul */, 20) // Sat
    )
    assert.strictEqual(result, 5)
  })

  it('returns a negative number if the first date is earlier', () => {
    const result = differenceInBusinessDays(
      new Date(2014, 0 /* Jan */, 10),
      new Date(2014, 6 /* Jul */, 20)
    )
    assert.strictEqual(result, -135)
  })

  it('accepts timestamps', () => {
    const result = differenceInBusinessDays(
      new Date(2014, 6, 18).getTime(),
      new Date(2014, 0, 10).getTime()
    )
    assert.strictEqual(result, 135)
  })

  describe('options', () => {
    const sat15 = new Date(2022, 0, 15)
    const sun16 = new Date(2022, 0, 16)
    const mon17 = new Date(2022, 0, 17)
    const tue18 = new Date(2022, 0, 18)
    const fri21 = new Date(2022, 0, 21)
    const mon24 = new Date(2022, 0, 24)

    describe('include start date, exclude end date (default)', () => {
      it('Sat 15 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, sat15)
        assert.strictEqual(result, 0)
      })

      it('Sun 16 -> Sat 15', () => {
        const result = differenceInBusinessDays(sat15, sun16)
        assert.strictEqual(result, 0)
      })

      it('Sat 15 -> Sat 15', () => {
        const result = differenceInBusinessDays(sat15, sat15)
        assert.strictEqual(result, 0)
      })

      it('Mon 17 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, mon17)
        assert.strictEqual(result, 0)
      })

      it('Sun 16 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, sun16)
        assert.strictEqual(result, 0)
      })

      it('Mon 17 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, mon17)
        assert.strictEqual(result, -1)
      })

      it('Mon 17 -> Mon 24', () => {
        const result = differenceInBusinessDays(mon24, mon17)
        assert.strictEqual(result, 5)
      })

      it('Mon 17 -> Tue 18', () => {
        const result = differenceInBusinessDays(tue18, mon17)
        assert.strictEqual(result, 1)
      })

      it('Mon 17 -> Fri 21', () => {
        const result = differenceInBusinessDays(fri21, mon17)
        assert.strictEqual(result, 4)
      })

      it('Fri 21 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, fri21)
        assert.strictEqual(result, -4)
      })

      it('Sun 16 -> Fri 21', () => {
        const result = differenceInBusinessDays(fri21, sun16)
        assert.strictEqual(result, 4)
      })

      it('Fri 21 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, fri21)
        assert.strictEqual(result, -5)
      })
    })

    describe('exclude start date, include end date', () => {
      const options = { includeStartDate: false, includeEndDate: true }

      it('Sat 15 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, sat15, options)
        assert.strictEqual(result, 0)
      })

      it('Sun 16 -> Sat 15', () => {
        const result = differenceInBusinessDays(sat15, sun16, options)
        assert.strictEqual(result, 0)
      })

      it('Sat 15 -> Sat 15', () => {
        const result = differenceInBusinessDays(sat15, sat15, options)
        assert.strictEqual(result, 0)
      })

      it('Mon 17 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, mon17, options)
        assert.strictEqual(result, 0)
      })

      it('Sun 16 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, sun16, options)
        assert.strictEqual(result, 1)
      })

      it('Mon 17 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, mon17, options)
        assert.strictEqual(result, 0)
      })

      it('Mon 17 -> Mon 24', () => {
        const result = differenceInBusinessDays(mon24, mon17, options)
        assert.strictEqual(result, 5)
      })

      it('Mon 17 -> Tue 18', () => {
        const result = differenceInBusinessDays(tue18, mon17, options)
        assert.strictEqual(result, 1)
      })

      it('Mon 17 -> Fri 21', () => {
        const result = differenceInBusinessDays(fri21, mon17, options)
        assert.strictEqual(result, 4)
      })

      it('Fri 21 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, fri21, options)
        assert.strictEqual(result, -4)
      })

      it('Sun 16 -> Fri 21', () => {
        const result = differenceInBusinessDays(fri21, sun16, options)
        assert.strictEqual(result, 5)
      })

      it('Fri 21 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, fri21, options)
        assert.strictEqual(result, -4)
      })
    })

    describe('include both start and end date', () => {
      const options = { includeEndDate: true }

      it('Sat 15 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, sat15, options)
        assert.strictEqual(result, 0)
      })

      it('Sun 16 -> Sat 15', () => {
        const result = differenceInBusinessDays(sat15, sun16, options)
        assert.strictEqual(result, 0)
      })

      it('Sat 15 -> Sat 15', () => {
        const result = differenceInBusinessDays(sat15, sat15, options)
        assert.strictEqual(result, 0)
      })

      it('Mon 17 -> Mon 17', () => {
        // only counting the day once
        const result = differenceInBusinessDays(mon17, mon17, options)
        assert.strictEqual(result, 1)
      })

      it('Sun 16 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, sun16, options)
        assert.strictEqual(result, 1)
      })

      it('Mon 17 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, mon17, options)
        assert.strictEqual(result, -1)
      })

      it('Mon 17 -> Mon 24', () => {
        const result = differenceInBusinessDays(mon24, mon17, options)
        assert.strictEqual(result, 6)
      })

      it('Mon 17 -> Tue 18', () => {
        const result = differenceInBusinessDays(tue18, mon17, options)
        assert.strictEqual(result, 2)
      })

      it('Mon 17 -> Fri 21', () => {
        const result = differenceInBusinessDays(fri21, mon17, options)
        assert.strictEqual(result, 5)
      })

      it('Fri 21 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, fri21, options)
        assert.strictEqual(result, -5)
      })

      it('Sun 16 -> Fri 21', () => {
        const result = differenceInBusinessDays(fri21, sun16, options)
        assert.strictEqual(result, 5)
      })

      it('Fri 21 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, fri21, options)
        assert.strictEqual(result, -5)
      })
    })

    describe('exclude both start and end date', () => {
      const options = { includeStartDate: false }

      it('Sat 15 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, sat15, options)
        assert.strictEqual(result, 0)
      })

      it('Sun 16 -> Sat 15', () => {
        const result = differenceInBusinessDays(sat15, sun16, options)
        assert.strictEqual(result, 0)
      })

      it('Sat 15 -> Sat 15', () => {
        const result = differenceInBusinessDays(sat15, sat15, options)
        assert.strictEqual(result, 0)
      })

      it('Mon 17 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, mon17, options)
        assert.strictEqual(result, 0)
      })

      it('Sun 16 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, sun16, options)
        assert.strictEqual(result, 0)
      })

      it('Mon 17 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, mon17, options)
        assert.strictEqual(result, 0)
      })

      it('Mon 17 -> Mon 24', () => {
        const result = differenceInBusinessDays(mon24, mon17, options)
        assert.strictEqual(result, 4)
      })

      it('Mon 17 -> Tue 18', () => {
        const result = differenceInBusinessDays(tue18, mon17, options)
        assert.strictEqual(result, 0)
      })

      it('Mon 17 -> Fri 21', () => {
        const result = differenceInBusinessDays(fri21, mon17, options)
        assert.strictEqual(result, 3)
      })

      it('Fri 21 -> Mon 17', () => {
        const result = differenceInBusinessDays(mon17, fri21, options)
        assert.strictEqual(result, -3)
      })

      it('Sun 16 -> Fri 21', () => {
        const result = differenceInBusinessDays(fri21, sun16, options)
        assert.strictEqual(result, 4)
      })

      it('Fri 21 -> Sun 16', () => {
        const result = differenceInBusinessDays(sun16, fri21, options)
        assert.strictEqual(result, -4)
      })
    })
  })

  describe('docs examples', () => {
    it('example 1', () => {
      const result = differenceInBusinessDays(
        new Date(2022, 0, 19), // Wed
        new Date(2022, 0, 16) // Sun
      )
      assert.strictEqual(result, 2)
    })

    it('example 2', () => {
      const result = differenceInBusinessDays(
        new Date(2022, 0, 14), // Fri
        new Date(2022, 0, 19) // Wed
      )
      assert.strictEqual(result, -3)
    })

    it('example 3', () => {
      const result = differenceInBusinessDays(
        new Date(2022, 0, 19), // Wed
        new Date(2022, 0, 19) // Wed
      )
      assert.strictEqual(result, 0)
    })

    it('example 4', () => {
      const result = differenceInBusinessDays(
        new Date(2022, 0, 19), // Wed
        new Date(2022, 0, 14), // Fri
        { includeStartDate: false, includeEndDate: true }
      )
      assert.strictEqual(result, 3)
    })
  })

  describe('edge cases', () => {
    it('the difference is less than a day, but the given dates are in different calendar days', () => {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59)
      )
      assert.strictEqual(result, 1)
    })

    it('the same for the swapped dates', () => {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert.strictEqual(result, -1)
    })

    it('the time values of the given dates are the same', () => {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5),
        new Date(2014, 8 /* Sep */, 4)
      )
      assert.strictEqual(result, 1)
    })

    it('the given dates are the same, and the function does not return -0', () => {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5),
        new Date(2014, 8 /* Sep */, 5)
      )
      assert.strictEqual(result, 0)
    })

    it('returns NaN if the first date is `Invalid Date`', () => {
      const result = differenceInBusinessDays(
        new Date(NaN),
        new Date(2017, 0 /* Jan */, 1)
      )
      assert(isNaN(result))
    })

    it('returns NaN if the second date is `Invalid Date`', () => {
      const result = differenceInBusinessDays(
        new Date(2017, 0 /* Jan */, 1),
        new Date(NaN)
      )
      assert(isNaN(result))
    })

    it('returns NaN if the both dates are `Invalid Date`', () => {
      const result = differenceInBusinessDays(new Date(NaN), new Date(NaN))
      assert(isNaN(result))
    })

    it('throws TypeError exception if passed less than 2 arguments', () => {
      // @ts-expect-error
      assert.throws(differenceInBusinessDays.bind(null), TypeError)
      // @ts-expect-error
      assert.throws(differenceInBusinessDays.bind(null, 1), TypeError)
    })
  })
})
