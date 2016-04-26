/* eslint-env mocha */

var assert = require('power-assert')
var endOfWeek = require('./')

describe('endOfWeek', function () {
  it('returns date with time setted to 23:59:59:999 and date setted to last day of week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfWeek(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    )
  })

  it('allows to pass when a week starts', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfWeek(date, {weekStartsAt: 1})
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    )
  })

  it('accepts string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = endOfWeek(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    )
  })

  it('accepts timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = endOfWeek(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    )
  })

  it('does not mutate original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function () {
    context('when current day value is less than start of week', function () {
      it('it returns end of week', function () {
        var date = new Date(2014, 9 /* Oct */, 6)
        var result = endOfWeek(date, {weekStartsAt: 3})
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 7, 23, 59, 59, 999))
      })
    })

    context('when current day value is equal to start of week', function () {
      it('it returns end of week', function () {
        var date = new Date(2014, 9 /* Oct */, 8)
        var result = endOfWeek(date, {weekStartsAt: 3})
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999))
      })
    })

    context('when current day value is bigger than start of week', function () {
      it('it returns end of week', function () {
        var date = new Date(2014, 9 /* Oct */, 10)
        var result = endOfWeek(date, {weekStartsAt: 3})
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999))
      })
    })

    context('with end of year', function () {
      var date = new Date(2014, 11 /* Dec */, 29)
      var result = endOfWeek(date, {weekStartsAt: 5})
      assert.deepEqual(result, new Date(2015, 0 /* Jan */, 1, 23, 59, 59, 999))
    })
  })
})

