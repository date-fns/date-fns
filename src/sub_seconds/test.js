// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subSeconds from '.'

describe('subSeconds', function () {
  it('subtracts the given number of seconds', function () {
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('accepts a string', function () {
    var result = subSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).toISOString(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40))
  })

  it('accepts a timestamp', function () {
    var result = subSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0)
    subSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
  })
})
