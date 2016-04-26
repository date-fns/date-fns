/* eslint-env mocha */

var assert = require('power-assert')
var isSameWeek = require('./')

describe('isSameWeek', function () {
  it('returns true if given dates have same week', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === true)
  })

  it('returns false if given dates have different weeks', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 30),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === false)
  })

  it('allows to specify when week starts', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      {weekStartsAt: 1}
    )
    assert(result === false)
  })

  it('accepts string', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).toISOString(),
      new Date(2014, 8 /* Sep */, 4).toISOString()
    )
    assert(result === true)
  })

  it('accepts timestamp', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 4).getTime()
    )
    assert(result === true)
  })
})

