/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import formatRFC3339 from '.'
import { generateOffset } from '../_lib/test'

describe('formatRFC3339', () => {
  it('formats RFC-3339 date string', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    assert(formatRFC3339(date) === `2019-03-03T19:00:52${generateOffset(date)}`)

    const getTimezoneOffsetStub = sinon.stub(
      Date.prototype,
      'getTimezoneOffset'
    )

    getTimezoneOffsetStub.returns(0)
    assert(formatRFC3339(date) === '2019-03-03T19:00:52Z')

    getTimezoneOffsetStub.returns(480)
    assert(formatRFC3339(date) === '2019-03-03T19:00:52-08:00')

    getTimezoneOffsetStub.restore()
  })

  it('accepts a timestamp', () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
    const time = date.getTime()
    assert(formatRFC3339(time) === `2019-10-04T12:30:13${generateOffset(date)}`)
  })

  it('allows to specify digits of second fractions', () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789)
    assert(
      formatRFC3339(date, { fractionDigits: 3 }) ===
        `2019-12-11T01:00:00.789${generateOffset(date)}`
    )
  })

  it('works when ms < 100', () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 12)
    assert(
      formatRFC3339(date, { fractionDigits: 2 }) ===
        `2019-12-11T01:00:00.01${generateOffset(date)}`
    )
  })

  it('implicitly converts options', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    const result = formatRFC3339(date, {
      // @ts-expect-error
      fractionDigits: '2',
    })
    assert.strictEqual(result, `2019-03-03T19:00:52.12${generateOffset(date)}`)
  })

  it('throws `RangeError` if `options.fractionDigits` is not convertable to 0, 1, 2, 3 or undefined', () => {
    const block = () =>
      formatRFC3339(new Date(2019, 2 /* Mar */, 3), {
        // @ts-expect-error
        fractionDigits: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws RangeError if the time value is invalid', () => {
    assert.throws(formatRFC3339.bind(null, new Date(NaN)), RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(formatRFC3339.bind(null), TypeError)
  })
})
