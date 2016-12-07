// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as esLocale from '.'

describe('es locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof esLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof esLocale.format === 'object')
  })
})
