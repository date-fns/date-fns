/* eslint-env mocha */

var assert = require('power-assert')
var setDate = require('./')

describe('setDate', function () {
  it('sets day of month', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1), 30)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts string', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).toISOString(), 18)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 18))
  })

  it('accepts timestamp', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25))
  })

  it('does not mutate original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    setDate(date, 20)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

