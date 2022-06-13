/* eslint-env mocha */

import assert from 'assert'
import subBusinessDays from './index'

describe('subBusinessDays', () => {
  it('substract the given number of business days', () => {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('handles negative amount', () => {
    const result = subBusinessDays(new Date(2014, 7 /* Sep */, 18), -10)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('can handle a large number of business days', () => {
    // @ts-ignore
    if (typeof global.timeout === 'function') {
      // @ts-ignore
      global.timeout(500 /* 500 ms test timeout */)
    }

    const result = subBusinessDays(new Date(15000, 0 /* Jan */, 1), 3387885)
    assert.deepStrictEqual(result, new Date(2014, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', () => {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('converts a fractional number to an integer', () => {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), 10.5)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('implicitly converts number arguments', () => {
    const result = subBusinessDays(
      new Date(2014, 8 /* Sep */, 1),
      // @ts-expect-error
      '10'
    )
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    subBusinessDays(date, 11)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = subBusinessDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(subBusinessDays.bind(null), TypeError)
    assert.throws(
      // @ts-expect-error
      subBusinessDays.bind(null, new Date(2014, 8 /* Sep */, 1)),
      TypeError
    )
  })
})
