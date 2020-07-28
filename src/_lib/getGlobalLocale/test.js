// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getGlobalLocale from '.'
import setGlobalLocale from '../../setGlobalLocale'

describe('getGlobalLocale', function() {
  var testLocale = {
    code: 'test'
  }
  var globalScope = typeof global === undefined ? window : global

  it('gets the current global locale', function() {
    setGlobalLocale(testLocale)
    var result = getGlobalLocale()
    assert.deepEqual(result, testLocale)
    delete globalScope.globalLocale
  })

  it('returns undefined if no global locale is set', function() {
    var result = getGlobalLocale()
    assert.deepEqual(result, undefined)
    delete globalScope.globalLocale
  })
})
