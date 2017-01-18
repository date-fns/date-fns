// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import svLocale from './'

describe('sv locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof svLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof svLocale.format === 'object')
  })
})
