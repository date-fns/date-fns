// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextDay from '.'

describe('nextDay', function () {
  it('returns the following Monday given the Friday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 20)
    var result = nextDay(notMonday, 1)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Thursday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 19)
    var result = nextDay(notMonday, 1)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Wednesday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 18)
    var result = nextDay(notMonday, 1)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Tuesday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 17)
    var result = nextDay(notMonday, 1)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Monday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 16)
    var result = nextDay(notMonday, 1)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Sunday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 22)
    var result = nextDay(notMonday, 1)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Saturday before it', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextDay(isSaturday, 1)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  // Tuesday
  it('returns the following Tuesday given the Saturday before it', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextDay(isSaturday, 2)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })

  // Wednesday
  it('returns the following Wednesday given the Saturday before it', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextDay(isSaturday, 3)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 25))
  })

  // Thursday
  it('returns the following Thursday given the Saturday before it', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextDay(isSaturday, 4)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 26))
  })

  // Friday
  it('returns the following Friday given the Saturday before it', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextDay(isSaturday, 5)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 27))
  })

  // Saturday
  it('returns the following Saturday given the Saturday before it', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextDay(isSaturday, 6)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 28))
  })

  // Sunday
  it('returns next Sunday given the day is Sunday', function () {
    const isSunday = new Date(2020, 2 /* Mar */, 22)
    var result = nextDay(isSunday, 0)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 29))
  })

  // Edge cases
  it('throws `RangeError` if the day is out of range', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextDay.bind(null, isSaturday, -1)
    assert.throws(result, RangeError)
  })

  it('throws `RangeError` if the day is out of range', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextDay.bind(null, isSaturday, 7)
    assert.throws(result, RangeError)
  })

  it('throws `TypeError` if 1 argument is passed in', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextDay.bind(null, isSaturday)
    assert.throws(result, TypeError)
  })
})
