/* eslint-env mocha */

import assert from 'assert'
import formatISO9075 from '.'

describe('formatISO9075', () => {
  it('formats ISO-9075 extended date format', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    assert(formatISO9075(date) === '2019-03-03 19:00:52')
  })

  it('accepts a timestamp', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime()
    assert(formatISO9075(date) === '2019-03-03 19:00:52')
  })

  it('formats ISO-8601 basic date format', () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
    assert(formatISO9075(date, { format: 'basic' }) === '20191004 123013')
  })

  it('formats only date', () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789)
    assert(
      formatISO9075(date, { representation: 'date', format: 'extended' }) ===
        '2019-12-11'
    )
    assert(
      formatISO9075(date, { representation: 'date', format: 'basic' }) ===
        '20191211'
    )
  })

  it('formats only time', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    assert(
      formatISO9075(date, { representation: 'time', format: 'extended' }) ===
        '19:00:52'
    )
    assert(
      formatISO9075(date, { representation: 'time', format: 'basic' }) ===
        '190052'
    )
  })

  describe('implicitly converts options', () => {
    it('`format`', () => {
      // eslint-disable-next-line no-new-wrappers
      const format = new String('basic')
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)

      const result = formatISO9075(date, {
        // @ts-expect-error
        format: format,
      })
      assert(result === '20191004 123013')
    })

    it('`representation`', () => {
      // eslint-disable-next-line no-new-wrappers
      const representation = new String('time')
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)

      const result = formatISO9075(date, {
        // @ts-expect-error
        representation: representation,
      })
      assert(result === '12:30:13')
    })
  })

  it("throws `RangeError` if `options.format` is not 'extended' or 'basic'", () => {
    const block = () =>
      formatISO9075(new Date(2019, 2 /* Mar */, 3), {
        // @ts-expect-error
        format: 'something else',
      })
    assert.throws(block, RangeError)
  })

  it("throws `RangeError` if `options.representation` is not 'date', 'time' or 'complete'", () => {
    const block = () =>
      formatISO9075(new Date(2019, 2 /* Mar */, 3), {
        // @ts-expect-error
        representation: 'something else',
      })
    assert.throws(block, RangeError)
  })

  it('throws RangeError if the time value is invalid', () => {
    assert.throws(formatISO9075.bind(null, new Date(NaN)), RangeError)
  })
})
