// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import skLocale from './'

describe('sk locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof skLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof skLocale.format === 'object')
  })
})
