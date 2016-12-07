// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfQuarter from '.'

describe('startOfQuarter', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of a quarter', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 1))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 2 /* Mar */, 2, 11, 55, 0).toISOString()
    var result = startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfQuarter(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})
