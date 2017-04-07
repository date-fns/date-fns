// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var getDay = require('./')

describe('getDay', function () {
  it('returns the day of the week of the given date', function () {
    var result = getDay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('accepts a string', function () {
    var result = getDay(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === 3)
  })

  it('accepts a timestamp', function () {
    var result = getDay(new Date(2014, 5 /* Jun */, 1).getTime())
    assert(result === 0)
  })

  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = getDay(date, {weekStartsOn: 1})
    assert(result === 1)
  })

  it('implicitly converts options', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // $ExpectedMistake
    var result = getDay(date, {weekStartsOn: '1'})
    assert(result === 1)
  })
})
