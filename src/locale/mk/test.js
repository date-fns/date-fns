// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import mkLocale from '.'

describe('mk locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof mkLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof mkLocale.format === 'object')
  })
})
