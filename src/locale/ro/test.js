// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import roLocale from '.'

describe('ro locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof roLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof roLocale.format === 'object')
  })
})
