/* eslint-env mocha */

var assert = require('power-assert')
var startOfISOWeek = require('./')

describe('startOfISOWeek', function () {
  it('returns date with time setted to 00:00:00 and date setted to first day of ISO week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts string', function () {
    var date = new Date(2014, 6 /* Jul */, 2, 11, 55, 0).toISOString()
    var result = startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 5 /* Jun */, 30))
  })

  it('accepts timestamp', function () {
    var date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime()
    var result = startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 10))
  })

  it('does not mutate original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfISOWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})

