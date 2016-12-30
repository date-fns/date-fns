/* eslint-env mocha */

var assert = require('power-assert')
var getWeeks = require('./')
var CONSTANTS = require('../_lib/constants')

describe('getWeeks', function () {
  it('PT responds 0 weeks', function () {
    var result = getWeeks('PT')
    assert(result === 0)
  })

  it('P1! responds 1 week', function () {
    var result = getWeeks('P1W')
    assert(result === 1)
  })

  it('P-1W responds -1 week', function () {
    var result = getWeeks('P-1W')
    assert(result === -1)
  })

  it('P1.1W responds 1.1 weeks', function () {
    var result = getWeeks('P1.1W')
    assert(result === 1.1)
  })

  it('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getWeeks('I\'m invalid')
    assert(result === CONSTANTS.INVALID_DURATION)
  })
})

