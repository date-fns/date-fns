/* eslint-env mocha */

var assert = require('power-assert')
var getWeeks = require('./')

describe('getDays', function () {
  it('PT responds 0 weeks', function () {
    var result = getWeeks('PT')
    assert(result === 0)
  })

  it('P1! responds 1 week', function () {
    var result = getWeeks('PT1W')
    assert(result === 1)
  })

  it('P-1W responds -1 week', function () {
    var result = getWeeks('PT-1W')
    assert(result === -1)
  })

  it('P1.1W responds 1.1 weeks', function () {
    var result = getWeeks('PT1.1W')
    assert(result === 1.1)
  })

  it.skip('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getWeeks('I\'m invalid')
    assert(result === 'Invalid Duration')
  })
})

