// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import idLocale from './'

describe('id locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof idLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof idLocale.format === 'object')
  })
})
