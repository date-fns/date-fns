/* eslint-env mocha */

var assert = require('power-assert')
var differenceInMilliseconds = require('./')

describe('differenceInMilliseconds', function () {
  it('returns number of milliseconds between dates', function () {
    var result = differenceInMilliseconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600)
    )
    assert(result === 100)
  })

  it('returns negative number if time value of first date is smaller', function () {
    var result = differenceInMilliseconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700)
    )
    assert(result === -100)
  })

  it('allows to pass strings', function () {
    var result = differenceInMilliseconds(
      new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString(),
      new Date(2014, 6 /* Jul */, 2, 23, 59, 58, 999).toISOString()
    )
    assert(result === 1000)
  })

  it('allows to pass timestamps', function () {
    var result = differenceInMilliseconds(
      new Date(2014, 8 /* Sep */, 5, 18, 30, 45, 500).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 30, 45, 500).getTime()
    )
    assert(result === 0)
  })
})

