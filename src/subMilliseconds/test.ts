/* eslint-env mocha */

import assert from 'assert'
import subMilliseconds from '.'

describe('subMilliseconds', function () {
  it('subtracts the given number of milliseconds', function () {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250)
    )
  })

  it('accepts a timestamp', function () {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(),
      500
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500)
    )
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    subMilliseconds(date, 250)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0))
  })
})
