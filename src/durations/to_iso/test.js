/* eslint-env mocha */

var assert = require('power-assert')
var toObject = require('../to_object')
var toIso = require('./')

describe('toIso', function () {
  it('is the inverse of toObject', function () {
    var initialIsoDuration = 'P1Y2M3W4DT5H6M7.89S'
    var durationAsObject = toObject(initialIsoDuration)
    var durationAsIso = toIso(durationAsObject)

    assert.equal(initialIsoDuration, durationAsIso)
  })

  it('doesn\'t include time designator when not needed', function () {
    var initialIsoDuration = 'P1Y2M3W4D'
    var durationAsObject = toObject(initialIsoDuration)
    var durationAsIso = toIso(durationAsObject)

    assert.equal(initialIsoDuration, durationAsIso)
  })
})
