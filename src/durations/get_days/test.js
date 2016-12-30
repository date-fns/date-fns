/* eslint-env mocha */

var assert = require('power-assert')
var getDays = require('./')
var CONSTANTS = require('../_lib/constants')

describe('getDays', function () {
  it('PT responds 0 days', function () {
    var result = getDays('PT')
    assert(result === 0)
  })

  it('P1D responds 1 day', function () {
    var result = getDays('P1D')
    assert(result === 1)
  })

  it('P-1D responds -1 day', function () {
    var result = getDays('P-1D')
    assert(result === -1)
  })

  it('P1.1D responds 1.1 days', function () {
    var result = getDays('P1.1D')
    assert(result === 1.1)
  })

  it('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getDays('I\'m invalid')
    assert(result === CONSTANTS.INVALID_DURATION)
  })
})

