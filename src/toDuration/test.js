// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import toDuration from '.'

describe('toDuration', function () {
  describe('string argument', function () {
    it('returns a duration object', function () {
      var result = toDuration('')
      assert.deepEqual(result, {
        months: 0,
        days: 0,
        milliseconds: 0
      })
    })

    it('parses years', function () {
      var result = toDuration('P5Y')
      assert.deepEqual(result, {
        months: 60,
        days: 0,
        milliseconds: 0
      })
    })

    it('parses months', function () {
      var result = toDuration('P1Y5M')
      assert.deepEqual(result, {
        months: 17,
        days: 0,
        milliseconds: 0
      })
    })

    it('parses days', function () {
      var result = toDuration('P1Y5M4D')
      assert.deepEqual(result, {
        months: 17,
        days: 4,
        milliseconds: 0
      })
    })

    it('parses hours', function () {
      var result = toDuration('P1Y5M4DT8H')
      var eightHoursInMilliseconds = 8 * 60 * 60 * 1000
      assert.deepEqual(result, {
        months: 17,
        days: 4,
        milliseconds: eightHoursInMilliseconds
      })
    })
  })
})
