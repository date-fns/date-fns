// @flow
/* eslint-env mocha */

import assert from 'assert'
import subBusinessDays from '.'

describe('subBusinessDays', function () {
  it('substract the given number of business days', function () {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('handles negative amount', function () {
    const result = subBusinessDays(new Date(2014, 7 /* Sep */, 18), -10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('can handle a large number of business days', () => {
    // @ts-ignore
    if (typeof this.timeout === 'function') {
      // @ts-ignore
      this.timeout(500 /* 500 ms test timeout */)
    }

    const result = subBusinessDays(new Date(15000, 0 /* Jan */, 1), 3387885)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', function () {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('converts a fractional number to an integer', function () {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), 10.5)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('implicitly converts number arguments', function () {
    // @ts-expect-error
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), '10')
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 8 /* Sep */, 1)
    subBusinessDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = subBusinessDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    // @ts-expect-error
    assert.throws(subBusinessDays.bind(null), TypeError)
    assert.throws(
      // @ts-expect-error
      subBusinessDays.bind(null, new Date(2014, 8 /* Sep */, 1)),
      TypeError
    )
  })
})
