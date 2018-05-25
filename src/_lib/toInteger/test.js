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

  it('converts convertable arguments', function () {
    var result = toInteger('-10.75')
    assert(result === -10)
  })

  it('returns NaN for non-convertable arguments', function () {
    var result = toInteger('Foobar')
    assert(typeof result === 'number' && isNaN(result))
  })
})
