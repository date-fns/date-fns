var assert = require('power-assert')
var differenceInYears = require('./')

describe('differenceInYears', function() {
  it('returns number of full years between dates', function() {
    var result = differenceInYears(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 1)
  })

  it('returns negative number if time value of first date is smaller', function() {
    var result = differenceInYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -1)
  })

  it('allows to pass strings', function() {
    var result = differenceInYears(
      new Date(2014, 0 /* Jan */, 1).toISOString(),
      new Date(2000, 0 /* Jan */, 1).toISOString()
    )
    assert(result === 14)
  })

  it('allows to pass timestamps', function() {
    var result = differenceInYears(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime()
    )
    assert(result === 4)
  })

  describe('edge cases', function() {
    it('difference is less than year, but dates are in different calendar years', function() {
      var result = differenceInYears(
        new Date(2015, 0 /* Jan */, 1),
        new Date(2014, 11 /* Dec */, 31)
      )
      assert(result === 0)
    })

    it('the same for swapped dates', function() {
      var result = differenceInYears(
        new Date(2014, 11 /* Dec */, 31),
        new Date(2015, 0 /* Jan */, 1)
      )
      assert(result === 0)
    })

    it('days and months of dates are the same', function() {
      var result = differenceInYears(
        new Date(2014, 8 /* Sep */, 5),
        new Date(2012, 8 /* Sep */, 5)
      )
      assert(result === 2)
    })

    it('dates are the same', function() {
      var result = differenceInYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})

