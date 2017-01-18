// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import itLocale from './'

describe('it locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof itLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof itLocale.format === 'object')
  })
})
