// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isLegitimate from '.'

describe('isValid', function () {
  it('returns true if the given date is valid', function () {
    var result = isLegitimate(2018, 0, 31)
    assert(result === true)
  })

  it('returns false if the given date is invalid', function () {
    var result = isLegitimate(2018, 1 /* Feb */, 31)
    assert(result === false)
  })

  it('accepts strings', function () {
    assert(isLegitimate('2018', '0', '31') === true)
    assert(isLegitimate('2018', '1', '31') === false)
  })

  it('throws TypeError exception if passed less than 3 arguments', function () {
    assert.throws(isLegitimate.bind(null), TypeError)
  })
})
