// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import toInteger from '.'

describe('toInteger', function() {
  it('truncates positive numbers', function() {
    const result = toInteger(10.99)
    assert(result === 10)
  })

  it('truncates negative numbers', function() {
    const result = toInteger(-5.5)
    assert(result === -5)
  })

  it('converts convertable strings', function() {
    const result = toInteger('-10.75')
    assert(result === -10)
  })

  it('returns NaN for non-convertable strings', function() {
    const result = toInteger('Foobar')
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for false', function() {
    const result = toInteger(false)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for true', function() {
    const result = toInteger(true)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for null', function() {
    const result = toInteger(null)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for undefined', function() {
    const result = toInteger(undefined)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for NaN', function() {
    const result = toInteger(NaN)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('converts convertable objects', function() {
    // eslint-disable-next-line no-new-wrappers
    const result = toInteger(new Number(123))
    assert(result === 123)
  })

  it('returns NaN for non-convertable objects', function() {
    // eslint-disable-next-line no-new-wrappers
    const result = toInteger({})
    assert(typeof result === 'number' && isNaN(result))
  })
})
