// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isExists from '.'

describe('isValid', function() {
  it('returns true if the given date is valid', function() {
    const result = isExists(2018, 0, 31)
    assert(result === true)
  })

  it('returns false if the given date is invalid', function() {
    const result = isExists(2018, 1 /* Feb */, 31)
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 3 arguments', function() {
    assert.throws(isExists.bind(null), TypeError)
  })
})
