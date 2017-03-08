// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfISOWeek from '.'

describe('startOfISOWeek', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of an ISO week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2, 11, 55, 0).toISOString()
    var result = startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 5 /* Jun */, 30))
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime()
    var result = startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 10))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfISOWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})
