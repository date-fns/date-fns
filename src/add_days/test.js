// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addDays from '.'

describe('addDays', function () {
  it('adds the given number of days', function () {
    var result = addDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts a string', function () {
    var result = addDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts a timestamp', function () {
    var result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    addDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
