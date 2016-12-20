/* eslint-env mocha */

var assert = require('power-assert')
var getMinutes = require('./')

describe('getMinutes', function () {
  it('PT responds 0 minutes', function () {
    var result = getMinutes('PT')
    assert(result === 0)
  })

  it('PT1M responds 1 minute', function () {
    var result = getMinutes('PT1M')
    assert(result === 1)
  })

  it('PT-1M responds -1 minute', function () {
    var result = getMinutes('PT-1M')
    assert(result === -1)
  })

  it('PT1.1M responds 1.1 minutes', function () {
    var result = getMinutes('PT1.1M')
    assert(result === 1.1)
  })

  it.skip('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getMinutes('I\'m invalid')
    assert(result === 'Invalid Duration')
  })
})

