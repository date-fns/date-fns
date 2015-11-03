var assert = require('power-assert')
var differenceInHours = require('./')

describe('differenceInHours', function() {
  it('returns number of hours between dates', function() {
    var result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 20, 0),
      new Date(2014, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 14)
  })

  it('returns negative number if time value of first date is smaller', function() {
    var result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 6, 0),
      new Date(2014, 6 /* Jul */, 2, 20, 0)
    )
    assert(result === -14)
  })

  it('allows to pass strings', function() {
    var result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString(),
      new Date(2014, 6 /* Jul */, 2, 13).toISOString()
    )
    assert(result === 10)
  })

  it('allows to pass timestamps', function() {
    var result = differenceInHours(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 5, 6, 0).getTime()
    )
    assert(result === 12)
  })

  describe('edge cases', function() {
    it('difference is less than hour, but dates are in different calendar hours', function() {
      var result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 12),
        new Date(2014, 8 /* Sep */, 5, 11, 59)
      )
      assert(result === 0)
    })

    it('the same for swapped dates', function() {
      var result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 11, 59),
        new Date(2014, 8 /* Sep */, 5, 12)
      )
      assert(result === 0)
    })

    it('difference is integer number of hours', function() {
      var result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 13, 0),
        new Date(2014, 8 /* Sep */, 5, 12, 0)
      )
      assert(result === 1)
    })

    it('dates are the same', function() {
      var result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})

