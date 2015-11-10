var assert = require('power-assert')
var startOfWeek = require('./')

describe('startOfWeek', function() {
  it('returns date with time setted to 00:00:00 and date setted to first day of week', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfWeek(date)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('allows to pass when a week starts', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfWeek(date, {weekStartsAt: 1})
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = startOfWeek(date)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = startOfWeek(date)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function() {
    context('when current day value is less than start of week', function() {
      it('it returns start of week', function() {
        var date = new Date(2014, 9 /* Oct */, 6)
        var result = startOfWeek(date, {weekStartsAt: 3})
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 1))
      })
    })

    context('when current day value is equal to start of week', function() {
      it('it returns start of week', function() {
        var date = new Date(2014, 9 /* Oct */, 8)
        var result = startOfWeek(date, {weekStartsAt: 3})
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 8))
      })
    })

    context('when current day value is bigger than start of week', function() {
      it('it returns start of week', function() {
        var date = new Date(2014, 9 /* Oct */, 10)
        var result = startOfWeek(date, {weekStartsAt: 3})
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 8))
      })
    })

    context('with start of year', function() {
      var date = new Date(2014, 0 /* Jan */, 1)
      var result = startOfWeek(date)
      assert.deepEqual(result, new Date(2013, 11 /* Dec */, 29))
    })
  })
})

