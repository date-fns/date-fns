// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import csLocale from './'

describe('cs locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof csLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof csLocale.format === 'object')
  })
})
