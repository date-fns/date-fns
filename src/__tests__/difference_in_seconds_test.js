var assert = require('power-assert')
var differenceInSeconds = require('../difference_in_seconds')

describe('differenceInSeconds', function() {
  it('returns number of seconds between dates', function() {
    var result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6)
    )
    assert(result === 14)
  })

  it('returns negative number if time value of first date is smaller', function() {
    var result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20)
    )
    assert(result === -14)
  })

  it('allows to pass strings', function() {
    var result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString(),
      new Date(2014, 6 /* Jul */, 2, 23, 59).toISOString()
    )
    assert(result === 59)
  })

  it('allows to pass timestamps', function() {
    var result = differenceInSeconds(
      new Date(2014, 8 /* Sep */, 5, 18, 30, 45).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 30, 15).getTime()
    )
    assert(result === 30)
  })

  describe('edge cases', function() {
    it('difference is less than second, but dates are in different calendar seconds', function() {
      var result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 12, 30, 12),
        new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999)
      )
      assert(result === 0)
    })

    it('the same for swapped dates', function() {
      var result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999),
        new Date(2014, 8 /* Sep */, 5, 12, 30, 12)
      )
      assert(result === 0)
    })

    it('difference is integer number of seconds', function() {
      var result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 12, 30, 25),
        new Date(2014, 8 /* Sep */, 5, 12, 30, 15)
      )
      assert(result === 10)
    })

    it('dates are the same', function() {
      var result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})

