// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import arLocale from './'

describe('ar locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof arLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof arLocale.format === 'object')
  })
})
