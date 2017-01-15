// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import enLocale from './'

describe('bg locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof enLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof enLocale.format === 'object')
  })
})
