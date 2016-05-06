/* eslint-env mocha */

var assert = require('power-assert')
var setDay = require('./')

describe('setDay', function () {
  it('sets the day of the week', function () {
    var result = setDay(new Date(2014, 8 /* Sep */, 1), 0)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('allows to specify which day is the first day of the week', function () {
    var result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {weekStartsOn: 1})
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('sets the day of another week if the day index is less than 0 or more than 6', function () {
    var result = setDay(new Date(2014, 8 /* Sep */, 1), 8)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8))
  })

  it('accepts a string', function () {
    var result = setDay(new Date(2014, 8 /* Sep */, 1).toISOString(), 5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 5))
  })

  it('accepts a timestamp', function () {
    var result = setDay(new Date(2014, 8 /* Sep */, 1).getTime(), 3)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 3))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    setDay(date, 3)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

