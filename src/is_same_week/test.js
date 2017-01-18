// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameWeek from '.'

describe('isSameWeek', function () {
  it('returns true if the given dates have the same week', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different weeks', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 30),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      {weekStartsOn: 1}
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).toISOString(),
      new Date(2014, 8 /* Sep */, 4).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 4).getTime()
    )
    assert(result === true)
  })
})
