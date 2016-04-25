/* eslint-env mocha */

var assert = require('power-assert')
var differenceInQuarters = require('./')

describe('differenceInQuarters', function () {
  it('returns number of full quarters between dates', function () {
    var result = differenceInQuarters(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 4)
  })

  it('returns negative number if time value of first date is smaller', function () {
    var result = differenceInQuarters(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -4)
  })

  it('allows to pass strings', function () {
    var result = differenceInQuarters(
      new Date(2000, 11 /* Dec */, 31).toISOString(),
      new Date(2000, 0 /* Jan */, 1).toISOString()
    )
    assert(result === 3)
  })

  it('allows to pass timestamps', function () {
    var result = differenceInQuarters(
      new Date(2014, 9 /* Oct */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime()
    )
    assert(result === 17)
  })

  describe('edge cases', function () {
    it('difference is less than quarter, but dates are in different calendar quarters', function () {
      var result = differenceInQuarters(
        new Date(2014, 6 /* Jul */, 1),
        new Date(2014, 5 /* Jun */, 30)
      )
      assert(result === 0)
    })

    it('the same for swapped dates', function () {
      var result = differenceInQuarters(
        new Date(2014, 5 /* Jun */, 30),
        new Date(2014, 6 /* Jul */, 1)
      )
      assert(result === 0)
    })

    it('days of months of dates are the same', function () {
      var result = differenceInQuarters(
        new Date(2014, 3 /* Apr */, 6),
        new Date(2014, 0 /* Jan */, 6)
      )
      assert(result === 1)
    })

    it('dates are the same', function () {
      var result = differenceInQuarters(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})

