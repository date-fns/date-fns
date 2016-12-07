// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfDay from '.'

describe('startOfDay', function () {
  it('returns the date with the time setted to 00:00:00', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfDay(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = startOfDay(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = startOfDay(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfDay(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})
