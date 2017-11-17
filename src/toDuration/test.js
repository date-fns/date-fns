// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import toDuration from '.'

describe('toDuration', function () {
  describe('string argument', function () {
    it('returns a duration object', function () {
      var result = toDuration('')
      assert.deepEqual(result, {})
    })
  })
})
