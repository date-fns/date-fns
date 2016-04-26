/* eslint-env mocha */

var assert = require('power-assert')
var closestTo = require('./')

describe('closestTo', function () {
  it('returns date from array closest to given date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('works if closest date from array is before given date', function () {
    var date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500)
    var result = closestTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 10)
    ])
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900))
  })

  it('accepts strings', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    var result = closestTo(date, [
      new Date(2012, 6 /* Jul */, 2).toISOString(),
      new Date(2015, 7 /* Aug */, 31).toISOString()
    ])
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('accepts timestamps', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime()
    ])
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('returns undefined if array is empty', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = closestTo(date, [])
    assert(result === undefined)
  })

  it('throws exception if second argument is not array', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var block = closestTo.bind(null, date, '')
    assert.throws(block, TypeError, '[object String] is not an array')
  })
})

