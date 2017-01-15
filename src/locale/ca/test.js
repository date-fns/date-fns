// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import caLocale from './'

describe('ca locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof caLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof caLocale.format === 'object')
  })
})
