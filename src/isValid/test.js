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

  it('throws an exception if the argument is not an instance of Date', function () {
    // $ExpectedMistake
    var block = isValid.bind(null, '')
    assert.throws(block, TypeError, '[object String] is not an instance of Date')
  })
})
