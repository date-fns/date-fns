/* eslint-env mocha */

var assert = require('power-assert')
var getSeconds = require('./')

describe('getSeconds', function () {
  it('PT responds 0 seconds', function () {
    var result = getSeconds('PT')
    assert(result === 0)
  })

  it('PT1S responds 1 second', function () {
    var result = getSeconds('PT1S')
    assert(result === 1)
  })

  it('PT-1S responds -1 second', function () {
    var result = getSeconds('PT-1S')
    assert(result === -1)
  })

  it('PT1.1S responds 1.1 second', function () {
    var result = getSeconds('PT1.1S')
    assert(result === 1.1)
  })

  it.skip('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getSeconds('I\'m invalid')
    assert(result === 'Invalid Duration')
  })
})

