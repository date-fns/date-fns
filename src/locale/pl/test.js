// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import plLocale from './'

describe('pl locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof plLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof plLocale.format === 'object')
  })
})
