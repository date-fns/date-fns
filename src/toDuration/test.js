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
        months: 12,
        days: 0,
        milliseconds: 0
      })
    })
  })
})
