// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import toInteger from '.'

describe('toInteger', function () {
  it('truncates positive numbers', function () {
    var result = toInteger(10.99)
    assert(result === 10)
  })

  it('truncates negative numbers', function () {
    var result = toInteger(-5.5)
    assert(result === -5)
  })

  it('converts convertable strings', function () {
    var result = toInteger('-10.75')
    assert(result === -10)
  })

  it('returns NaN for non-convertable strings', function () {
    var result = toInteger('Foobar')
    assert(typeof result === 'number' && isNaN(result))
  })

  it('converts false to 0', function () {
    var result = toInteger(false)
    assert(result === 0)
  })

  it('converts true to 1', function () {
    var result = toInteger(true)
    assert(result === 1)
  })

  it('returns NaN for null', function () {
    var result = toInteger(null)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('returns NaN for undefined', function () {
    var result = toInteger(undefined)
    assert(typeof result === 'number' && isNaN(result))
  })

  it('converts convertable objects', function () {
    // eslint-disable-next-line no-new-wrappers
    var result = toInteger(new Number(123))
    assert(result === 123)
  })

  it('returns NaN for non-convertable objects', function () {
    // eslint-disable-next-line no-new-wrappers
    var result = toInteger({})
    assert(typeof result === 'number' && isNaN(result))
  })
})
