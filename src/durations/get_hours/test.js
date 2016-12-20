var assert = require('power-assert')
var getHours = require('./')

describe('getHours', function () {
  it('PT responds 0 hours', function () {
    var result = getHours('PT')
    assert(result === 0)
  })

  it('PT1H responds 1 hour', function () {
    var result = getHours('PT1H')
    assert(result === 1)
  })

  it('PT-1H responds -1 hour', function () {
    var result = getHours('PT-1H')
    assert(result === -1)
  })

  it('PT1.1H responds 1.1 hours', function () {
    var result = getHours('PT1.1H')
    assert(result === 1.1)
  })

  it.skip('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getHours('I\'m invalid')
    assert(result === 'Invalid Duration')
  })
})

