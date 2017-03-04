// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfQuarter from '.'

describe('endOfQuarter', function () {
  it('returns the date with the time setted to 23:59:59.999 and the date setted to the last day of a quarter', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 0 /* Jan */, 1, 11, 55, 0).toISOString()
    var result = endOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 2 /* Mar */, 31, 23, 59, 59, 999))
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = endOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfQuarter(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})
