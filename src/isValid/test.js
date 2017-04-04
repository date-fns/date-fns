// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isValid from '.'

describe('isValid', function () {
  it('returns true if the given date is valid', function () {
    var result = isValid(new Date())
    assert(result === true)
  })

  it('returns false if the given date is invalid', function () {
    var result = isValid(new Date(''))
    assert(result === false)
  })

  it('accepts a string', function () {
    assert(isValid(new Date(2014, 6 /* Jul */, 8).toString()) === true)
    assert(isValid('') === false)
  })

  it('accepts a timestamp', function () {
    assert(isValid(new Date(2014, 1 /* Feb */, 11).getTime()) === true)
    assert(isValid(NaN) === false)
  })
})
