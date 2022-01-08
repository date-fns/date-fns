/* eslint-env mocha */

import assert from 'assert'
import eachWeekendOfInterval from '.'

describe('eachWeekendOfInterval', () => {
  it('returns all weekends within the interval', () => {
    const result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 17),
      end: new Date(2018, 8 /* Sept */, 30),
    })
    assert.deepStrictEqual(result, [
      new Date(2018, 8 /* Sept */, 22),
      new Date(2018, 8 /* Sept */, 23),
      new Date(2018, 8 /* Sept */, 29),
      new Date(2018, 8 /* Sept */, 30),
    ])
  })

  it('returns all weekends within the interval when starting on a weekend', () => {
    const result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 22),
      end: new Date(2018, 8 /* Sept */, 30),
    })
    assert.deepStrictEqual(result, [
      new Date(2018, 8 /* Sept */, 22),
      new Date(2018, 8 /* Sept */, 23),
      new Date(2018, 8 /* Sept */, 29),
      new Date(2018, 8 /* Sept */, 30),
    ])
  })

  it('throws `RangeError` invalid interval start date is used', () => {
    const block = eachWeekendOfInterval.bind(null, {
      start: new Date(NaN),
      end: new Date(2019, 11 /* Dec */, 31),
    })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` invalid interval end date is used', () => {
    const block = eachWeekendOfInterval.bind(null, {
      start: new Date(2019, 0 /* Jan */, 1),
      end: new Date(NaN),
    })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if start of an interval is after its end', () => {
    const block = eachWeekendOfInterval.bind(null, {
      start: new Date(2018, 8 /* Sept */, 25),
      end: new Date(2018, 8 /* Sept */, 6),
    })
    assert.throws(block, RangeError)
  })
})
