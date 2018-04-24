/* eslint-env mocha */

var assert = require('power-assert')
var getYears = require('./')
var CONSTANTS = require('../_lib/constants')

describe('getYears', function () {
  it('PT responds 0 days', function () {
    var result = getYears('PT')
    assert(result === 0)
  })

  it('P1Y responds 1 year', function () {
    var result = getYears('P1Y')
    assert(result === 1)
  })

  it('P-1Y responds -1 year', function () {
    var result = getYears('P-1Y')
    assert(result === -1)
  })

  it('P1.1Y responds 1.1 years', function () {
    var result = getYears('P1.1Y')
    assert(result === 1.1)
  })

  it('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getYears('I\'m invalid')
    assert(result === CONSTANTS.INVALID_DURATION)
  })
})

