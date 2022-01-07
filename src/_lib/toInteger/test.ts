/* eslint-env mocha */

import assert from 'assert'
import toInteger from '.'

describe('toInteger', () => {
  it('truncates positive numbers', () => {
    var result = toInteger(10.99)
    assert(result === 10)
  })

  it('truncates negative numbers', () => {
    var result = toInteger(-5.5)
    assert(result === -5)
  })

  it('converts convertable strings', () => {
    var result = toInteger('-10.75')
    assert(result === -10)
  })

  it('returns NaN for non-convertable strings', () => {
    var result = toInteger('Foobar')
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for false', () => {
    var result = toInteger(false)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for true', () => {
    var result = toInteger(true)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for null', () => {
    var result = toInteger(null)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for undefined', () => {
    var result = toInteger(undefined)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for NaN', () => {
    var result = toInteger(NaN)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('converts convertable objects', () => {
    // eslint-disable-next-line no-new-wrappers
    var result = toInteger(new Number(123))
    assert(result === 123)
  })

  it('returns NaN for non-convertable objects', () => {
    // eslint-disable-next-line no-new-wrappers
    var result = toInteger({})
    assert(typeof result === 'number' && isNaN(result))
  })
})
