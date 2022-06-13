/* eslint-env mocha */

import assert from 'assert'
import isValid from './index'

describe('isValid', () => {
  it('returns true if the given date is valid', () => {
    const result = isValid(new Date())
    assert(result === true)
  })

  it('returns false if the given date is invalid', () => {
    const result = isValid(new Date(''))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    assert(isValid(new Date(2014, 1 /* Feb */, 11).getTime()) === true)
    assert(isValid(NaN) === false)
  })

  it('treats null as an invalid date', () => {
    const result = isValid(null)
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(isValid.bind(null), TypeError)
  })
})
