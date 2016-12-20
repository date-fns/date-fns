/* eslint-env mocha */

var assert = require('power-assert')
var getYears = require('./')

describe('getYears', function () {
  it('PT responds 0 days', function () {
    var result = getYears('PT')
    assert(result === 0)
  })

  it('P1Y responds 1 year', function () {
    var result = getYears('PT1Y')
    assert(result === 1)
  })

  it('P-1Y responds -1 year', function () {
    var result = getYears('PT-1Y')
    assert(result === -1)
  })

  it('P1.1Y responds 1.1 years', function () {
    var result = getYears('PT1.1Y')
    assert(result === 1.1)
  })

  it.skip('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getYears('I\'m invalid')
    assert(result === 'Invalid Duration')
  })
})

