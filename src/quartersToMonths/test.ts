/* eslint-env mocha */

import assert from 'assert'
import quartersToMonths from '.'

describe('quartersToMonths', function () {
  it('converts 1 quarter to months', function () {
    const result = quartersToMonths(1)
    assert.deepStrictEqual(result, 3)
  })

  it('converts 3 quarters to months', function () {
    const result = quartersToMonths(3)
    assert.deepStrictEqual(result, 9)
  })

  it('converts 5 quarters to months', function () {
    const result = quartersToMonths(5)
    assert.deepStrictEqual(result, 15)
  })
})
