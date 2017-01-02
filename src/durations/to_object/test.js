/* eslint-env mocha */

var assert = require('power-assert')
var toObject = require('./')

describe('toObject', function () {
  it('returns object with units as keys', function () {
    var result = toObject('P1Y2M3W4DT5H6M7.89S')
    assert.deepEqual(result, {
      years: 1,
      months: 2,
      weeks: 3,
      days: 4,
      hours: 5,
      minutes: 6,
      seconds: 7.89
    })
  })

  it('undefined values are returned as 0', function () {
    var result = toObject('PT')
    assert.deepEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    })
  })

  it('duration object can\'t be modified', function () {
    var result = toObject('PT')
    result.years = 1
    assert(result.years !== 1)
  })
})

