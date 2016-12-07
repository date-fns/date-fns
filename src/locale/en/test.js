// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as enLocale from '.'

describe('en locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof enLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof enLocale.format === 'object')
  })

  it('exports parse object', function () {
    assert(typeof enLocale.parse === 'object')
  })
})
