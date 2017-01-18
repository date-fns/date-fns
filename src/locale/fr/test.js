// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import frLocale from './'

describe('fr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof frLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof frLocale.format === 'object')
  })
})
