// @flow
/* eslint-env mocha */

import assert from 'assert'
import eachMonthOfInterval from '.'

describe('eachMonthOfInterval', function() {
  it('returns an array with starts of months from the month of the start date to the month of the end date', function() {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6),
      end: new Date(2014, 7 /* Aug */, 12)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1)
    ])
  })

  it('accepts timestamps', function() {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6).getTime(),
      end: new Date(2014, 7 /* Aug */, 12).getTime()
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1)
    ])
  })

  it('handles the dates that are not starts of days', function() {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: new Date(2014, 7 /* Aug */, 12, 22, 15)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1)
    ])
  })

  it('handles the dates that are not containing days', function() {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */),
      end: new Date(2014, 7 /* Aug */)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1)
    ])
  })

  it('returns one month if the both arguments are on the same month', function() {
    const result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 9, 15)
    })
    assert.deepEqual(result, [new Date(2014, 9 /* Oct */, 1)])
  })

  it('returns one month if the both arguments are the same', function() {
    const result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14)
    })
    assert.deepEqual(result, [new Date(2014, 9 /* Oct */, 1)])
  })

  it('throws an exception if the start date is after the end date', function() {
    const block = eachMonthOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', function() {
    const block = eachMonthOfInterval.bind(null, {
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', function() {
    const block = eachMonthOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', function() {
    const block = eachMonthOfInterval.bind(
      null,
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(eachMonthOfInterval.bind(null), TypeError)
  })
})
