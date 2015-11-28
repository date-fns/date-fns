var assert = require('power-assert')
var differenceInMinutes = require('./')

describe('differenceInMinutes', function() {
  it('returns number of minutes between dates', function() {
    var result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 20),
      new Date(2014, 6 /* Jul */, 2, 12, 6)
    )
    assert(result === 14)
  })

  it('returns negative number if time value of first date is smaller', function() {
    var result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 6),
      new Date(2014, 6 /* Jul */, 2, 12, 20)
    )
    assert(result === -14)
  })

  it('allows to pass strings', function() {
    var result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString(),
      new Date(2014, 6 /* Jul */, 2, 23).toISOString()
    )
    assert(result === 59)
  })

  it('allows to pass timestamps', function() {
    var result = differenceInMinutes(
      new Date(2014, 8 /* Sep */, 5, 18, 45).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 15).getTime()
    )
    assert(result === 30)
  })

  describe('edge cases', function() {
    it('difference is less than minute, but dates are in different calendar minutes', function() {
      var result = differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 12, 12),
        new Date(2014, 8 /* Sep */, 5, 12, 11, 59)
      )
      assert(result === 0)
    })

    it('the same for swapped dates', function() {
      var result = differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 12, 11, 59),
        new Date(2014, 8 /* Sep */, 5, 12, 12)
      )
      assert(result === 0)
    })

    it('difference is integer number of minutes', function() {
      var result = differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 12, 25),
        new Date(2014, 8 /* Sep */, 5, 12, 15)
      )
      assert(result === 10)
    })

    it('dates are the same', function() {
      var result = differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})

