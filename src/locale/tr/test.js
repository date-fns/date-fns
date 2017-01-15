// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import trLocale from './'

describe('tr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof trLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof trLocale.format === 'object')
  })
})
