// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import fiLocale from './'

describe('fi locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof fiLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof fiLocale.format === 'object')
  })
})
