// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfUTCISOWeek from '.'

describe('format > startOfUTCISOWeek', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of an ISO week', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    var result = startOfUTCISOWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('accepts a string', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2, 11, 55, 0)).toISOString()
    var result = startOfUTCISOWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 5 /* Jun */, 30)))
  })

  it('accepts a timestamp', function () {
    var date = new Date(Date.UTC(2014, 1 /* Feb */, 11, 11, 55, 0)).getTime()
    var result = startOfUTCISOWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 1 /* Feb */, 10)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    startOfUTCISOWeek(date)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0)))
  })
})
