// @flow
/* eslint-env mocha */

import assert from 'power-assert'

import eachMinuteOfInterval from '.'

describe('eachMinuteOfInterval', () => {
  it('should return an array of Date objects containing a Date for each minute between the interval', () => {
    const result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 0),
      end: new Date(2020, 10, 14, 13, 5)
    })

    assert.deepEqual(result, [
      new Date(2020, 10, 14, 13, 0),
      new Date(2020, 10, 14, 13, 1),
      new Date(2020, 10, 14, 13, 2),
      new Date(2020, 10, 14, 13, 3),
      new Date(2020, 10, 14, 13, 4),
      new Date(2020, 10, 14, 13, 5)
    ])
  })

  it('should handle all the minutes that are not in the begining', () => {
    const result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 0, 33),
      end: new Date(2020, 10, 14, 13, 2)
    })

    assert.deepEqual(result[0], new Date(2020, 10, 14, 13))
    assert.deepEqual(result[2], new Date(2020, 10, 14, 13, 2))
  })

  it('should accept timestamps', () => {
    const start = new Date(2020, 10, 14, 13, 0).getTime()
    const end = new Date(2020, 10, 14, 13, 2).getTime()

    const result = eachMinuteOfInterval({
      start,
      end
    })

    assert.deepEqual(result, [
      new Date(2020, 10, 14, 13, 0),
      new Date(2020, 10, 14, 13, 1),
      new Date(2020, 10, 14, 13, 2)
    ])
  })

  it('throws an exception if the start date is after the end date', () => {
    const block = eachMinuteOfInterval.bind(null, {
      start: new Date(2014, 10, 14, 10),
      end: new Date(2014, 10, 14, 5)
    })
    assert.throws(block, RangeError)
  })

  describe('options.step', () => {
    const interval = {
      start: new Date(2020, 9, 14, 13, 1),
      end: new Date(2020, 9, 14, 13, 7)
    }

    const stepError = /^RangeError: `options.step` must be a number equal or greater than 1$/

    it('returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step', () => {
      const result = eachMinuteOfInterval(interval, { step: 3 })
      assert.deepEqual(result, [
        new Date(2020, 9, 14, 13, 1),
        new Date(2020, 9, 14, 13, 4),
        new Date(2020, 9, 14, 13, 7)
      ])
    })

    it('throws TypeError error if `options.step` is less than 1', () => {
      assert.throws(
        () => eachMinuteOfInterval(interval, { step: 0 }),
        stepError
      )
      assert.throws(
        () => eachMinuteOfInterval(interval, { step: -3 }),
        stepError
      )
    })

    it('throws TypeError error if `options.step` is NaN', () => {
      // $ExpectedMistake
      assert.throws(
        () => eachMinuteOfInterval(interval, { step: 'w' }),
        stepError
      )
      assert.throws(
        () => eachMinuteOfInterval(interval, { step: NaN }),
        stepError
      )
    })
  })
})
