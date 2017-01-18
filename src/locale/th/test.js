// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import thLocale from './'

describe('th locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof thLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof thLocale.format === 'object')
  })
})
