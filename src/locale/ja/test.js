// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import jaLocale from '.'

describe('ja locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof jaLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof jaLocale.format === 'object')
  })
})
