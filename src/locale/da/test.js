// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import daLocale from './'

describe('da locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof daLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof daLocale.format === 'object')
  })
})
