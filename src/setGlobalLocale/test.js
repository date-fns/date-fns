// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setGlobalLocale from '.'
import { eo, enUS } from '../locale'
import formatDistance from '../formatDistance'

describe('setGlobalLocale', function() {
  var globalScope = typeof global === undefined ? window : global

  it('sets the global locale', function() {
    setGlobalLocale(eo)
    var result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1))
    assert.deepEqual(result, 'pli ol 1 jaro')
    delete globalScope.globalLocale
  })

  it('prioritizes locale in options over global locale', function() {
    setGlobalLocale(eo)
    var result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
      addSuffix: true,
      locale: enUS
    })
    assert.deepEqual(result, 'about 1 year ago')
    delete globalScope.globalLocale
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(setGlobalLocale.bind(null), TypeError)
  })

  it('throws RangeError exception if not passed a Locale object', function() {
    assert.throws(setGlobalLocale.bind(null, 'string'), RangeError)
    assert.throws(setGlobalLocale.bind(null, 0), RangeError)
    assert.throws(setGlobalLocale.bind(null, {}), RangeError)
  })
})
