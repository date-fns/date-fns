/* eslint-env mocha */

import assert from 'assert'
import { describe, it } from 'vitest'
import Interval from './index'

describe('Interval', () => {
  it('exposes start and end', () => {
    const result = new Interval(new Date(2000, 0), new Date(2023, 0))
    assert.deepStrictEqual(result.start, new Date(2000, 0))
    assert.deepStrictEqual(result.end, new Date(2023, 0))
  })

  it('normalizes the dates', () => {
    const result = new Interval(
      +new Date(2000, 0),
      new Date(2023, 0).toISOString()
    )
    assert.deepStrictEqual(result.start, new Date(2000, 0))
    assert.deepStrictEqual(result.end, new Date(2023, 0))
  })

  it('throws an error if one of the arguments is missing', () => {
    assert.throws(() => {
      // @ts-expect-error
      new Interval(new Date(2000, 0))
    }, new TypeError('End date is required'))

    assert.throws(() => {
      // @ts-expect-error
      new Interval()
    }, new TypeError('Start date is required'))
  })

  it('throws an error if one of the arguments is invalid', () => {
    assert.throws(() => {
      new Interval(new Date(2000, 0), new Date(NaN))
    }, new TypeError('End date is invalid'))

    assert.throws(() => {
      new Interval(new Date(NaN), new Date(2000, 0))
    }, new TypeError('Start date is invalid'))
  })

  it('throws an error if the interval is not positive', () => {
    // Should be ok
    new Interval(new Date(2023, 0), new Date(2000, 0))

    assert.throws(() => {
      new Interval(new Date(2023, 0), new Date(2000, 0), {
        assertPositive: true,
      })
    }, new TypeError('End date must be after start date'))

    // Should be ok too
    new Interval(new Date(2000, 0), new Date(2000, 0), {
      assertPositive: true,
    })
  })
})
