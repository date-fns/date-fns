// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var locale = require('./')

describe('fr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof locale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof locale.format === 'object')
  })

  it('exports getTranslation method', function () {
    assert(typeof locale.getTranslation === 'function')
  })
})
