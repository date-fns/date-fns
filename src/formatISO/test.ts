/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import formatISO from '.'
import { generateOffset } from '../_lib/test'

describe('formatISO', () => {
  it('formats ISO-8601 extended format', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    const tzOffsetExtended = generateOffset(date)
    assert(formatISO(date) === `2019-03-03T19:00:52${tzOffsetExtended}`)

    const getTimezoneOffsetStub = sinon.stub(
      Date.prototype,
      'getTimezoneOffset'
    )

    getTimezoneOffsetStub.returns(480)
    const tzNegativeOffsetExtended = generateOffset(date)
    assert(formatISO(date) === `2019-03-03T19:00:52${tzNegativeOffsetExtended}`)

    getTimezoneOffsetStub.returns(0)
    const tzZOffsetExtended = generateOffset(date)
    assert(formatISO(date) === `2019-03-03T19:00:52${tzZOffsetExtended}`)

    getTimezoneOffsetStub.restore()
  })

  it('accepts a timestamp', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime()
    const tzOffsetExtended = generateOffset(new Date(date))
    assert(formatISO(date) === `2019-03-03T19:00:52${tzOffsetExtended}`)
  })

  it('formats ISO-8601 basic format', () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
    const tzOffsetBasic = generateOffset(date)
    assert(
      formatISO(date, { format: 'basic' }) === `20191004T123013${tzOffsetBasic}`
    )
  })

  it('formats only date', () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789)

    assert(
      formatISO(date, { representation: 'date', format: 'extended' }) ===
        '2019-12-11'
    )
    assert(
      formatISO(date, { representation: 'date', format: 'basic' }) ===
        '20191211'
    )
  })

  it('formats only time', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    const tzOffset = generateOffset(date)

    assert(
      formatISO(date, { representation: 'time', format: 'extended' }) ===
        `19:00:52${tzOffset}`
    )
    assert(
      formatISO(date, { representation: 'time', format: 'basic' }) ===
        `190052${tzOffset}`
    )
  })

  describe('implicitly converts options', () => {
    it('`format`', () => {
      // eslint-disable-next-line no-new-wrappers
      const format = new String('basic')
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
      const tzOffsetExtended = generateOffset(date)

      const result = formatISO(date, {
        // @ts-expect-error
        format: format,
      })
      assert(result === `20191004T123013${tzOffsetExtended}`)
    })

    it('`representation`', () => {
      // eslint-disable-next-line no-new-wrappers
      const representation = new String('time')
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
      const tzOffsetExtended = generateOffset(date)

      const result = formatISO(date, {
        // @ts-expect-error
        representation: representation,
      })
      assert(result === `12:30:13${tzOffsetExtended}`)
    })
  })

  it("throws `RangeError` if `options.format` is not 'extended' or 'basic'", () => {
    const block = () =>
      formatISO(new Date(2019, 2 /* Mar */, 3), {
        // @ts-expect-error
        format: 'something else',
      })
    assert.throws(block, RangeError)
  })

  it("throws `RangeError` if `options.representation` is not 'date', 'time' or 'complete'", () => {
    const block = () =>
      formatISO(new Date(2019, 2 /* Mar */, 3), {
        // @ts-expect-error
        representation: 'something else',
      })
    assert.throws(block, RangeError)
  })

  it('throws RangeError if the time value is invalid', () => {
    assert.throws(formatISO.bind(null, new Date(NaN)), RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(formatISO.bind(null), TypeError)
  })
})
