var assert = require('power-assert')
var differenceInDays = require('./')

describe('differenceInDays', function() {
  it('returns number of full days between dates', function() {
    var result = differenceInDays(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 366)
  })

  it('returns negative number if time value of first date is smaller', function() {
    var result = differenceInDays(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -366)
  })

  it('accepts strings', function() {
    var result = differenceInDays(
      new Date(2014, 6 /* Jul */, 1, 23, 59, 59, 999).toISOString(),
      new Date(2014, 0 /* Jan */, 1).toISOString()
    )
    assert(result === 181)
  })

  it('accepts timestamps', function() {
    var result = differenceInDays(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime()
    )
    assert(result === 1)
  })

  describe('edge cases', function() {
    it('difference is less than day, but dates are in different calendar days', function() {
      var result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59)
      )
      assert(result === 0)
    })

    it('the same for swapped dates', function() {
      var result = differenceInDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('times of dates are the same', function() {
      var result = differenceInDays(
        new Date(2014, 8 /* Sep */, 6, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 1)
    })

    it('dates are the same', function() {
      var result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})

