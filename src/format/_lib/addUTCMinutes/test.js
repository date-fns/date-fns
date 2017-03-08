// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addUTCMinutes from '.'

describe('addUTCMinutes', function () {
  it('adds the given number of minutes', function () {
    var result = addUTCMinutes(new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0)), 30)
    assert.deepEqual(result, new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 30)))
  })

  it('accepts a string', function () {
    var result = addUTCMinutes(
      new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0)).toISOString(), 20
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 20)))
  })

  it('accepts a timestamp', function () {
    var result = addUTCMinutes(
      new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0)).getTime(), 20
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 20)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0))
    addUTCMinutes(date, 25)
    assert.deepEqual(date, new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0)))
  })
})
