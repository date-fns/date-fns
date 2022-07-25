/* eslint-env mocha */

import assert from 'assert'
import toInteger from './index'

describe('toInteger', () => {
  it('truncates positive numbers', () => {
    const result = toInteger(10.99)
    assert(result === 10)
  })

  it('truncates negative numbers', () => {
    const result = toInteger(-5.5)
    assert(result === -5)
  })

  it('converts convertable strings', () => {
    const result = toInteger('-10.75')
    assert(result === -10)
  })

  it('returns NaN for non-convertable strings', () => {
    const result = toInteger('Foobar')
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for false', () => {
    const result = toInteger(false)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for true', () => {
    const result = toInteger(true)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for null', () => {
    const result = toInteger(null)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for undefined', () => {
    const result = toInteger(undefined)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for NaN', () => {
    const result = toInteger(NaN)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('converts convertable objects', () => {
    // eslint-disable-next-line no-new-wrappers
    const result = toInteger(new Number(123))
    assert(result === 123)
  })

  it('returns NaN for non-convertable objects', () => {
    // eslint-disable-next-line no-new-wrappers
    const result = toInteger({})
    assert(typeof result === 'number' && isNaN(result))
  })
})
