var assert = require('power-assert')
var getMonths = require('./')

describe('getMonths', function () {
  it('PT responds 0 days', function () {
    var result = getMonths('PT')
    assert(result === 0)
  })

  it('P1M responds 1 month', function () {
    var result = getMonths('PT1M')
    assert(result === 1)
  })

  it('P-1M responds -1 month', function () {
    var result = getMonths('PT-1M')
    assert(result === -1)
  })

  it('P1.1M responds 1.1 months', function () {
    var result = getMonths('PT1.1M')
    assert(result === 1.1)
  })

  it.skip('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getMonths('I\'m invalid')
    assert(result === 'Invalid Duration')
  })
})

