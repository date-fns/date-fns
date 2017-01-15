// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import elLocale from './'

describe('el locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof elLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof elLocale.format === 'object')
  })
})
