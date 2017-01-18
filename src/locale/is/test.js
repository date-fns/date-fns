// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isLocale from './'

describe('is locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof isLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof isLocale.format === 'object')
  })
})
