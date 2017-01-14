// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var nextMonth = require('./')

describe('nextMonth', function () {
  it('returns the next month of the given date', function () {
    var result = nextMonth(new Date(2014, 11 /* Dev */, 25))
    assert(result === 0)
  })

  it('accepts a string', function () {
    var result = nextMonth(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === 7)
  })

  it('accepts a timestamp', function () {
    var result = nextMonth(new Date(2014, 3 /* Apr */, 2).getTime())
    assert(result === 4)
  })
})
