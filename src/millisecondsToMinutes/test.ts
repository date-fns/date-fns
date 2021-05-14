/* eslint-env mocha */

import assert from 'assert'
import millisecondsToMinutes from '.'

describe('millisecondsToMinutes', function () {
  it('converts 50000 milliseconds to minutes', function () {
    const result = millisecondsToMinutes(50000)
    assert(result === 0)
  })

  it('converts 65000 milliseconds to minutes', function () {
    const result = millisecondsToMinutes(65000)
    assert(result === 1)
  })

  it('converts 190000 milliseconds to minutes', function () {
    const result = millisecondsToMinutes(190000)
    assert(result === 3)
  })

  it('converts 310000 milliseconds to minutes', function () {
    const result = millisecondsToMinutes(310000)
    assert(result === 5)
  })
})
