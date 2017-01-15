// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import koLocale from './'

describe('ko locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof koLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof koLocale.format === 'object')
  })
})
