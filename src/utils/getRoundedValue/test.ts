// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getRoundedValue from '.'

describe('getRoundedValue', () => {

  it("floor rounds if argument is greater than 0", () => {
    const result = getRoundedValue(1.95)
    assert(result === 1)
  })

  it("ceil rounds if argument is less than 0", () => {
    const result = getRoundedValue(-0.99)
    assert(result === 0)
  })

  it("returns 0 if the argument is rounded to -0 #2555", () => {
    const result = getRoundedValue(-0.003)
    assert(Object.is(result, 0))
  })
})
