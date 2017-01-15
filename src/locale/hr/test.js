// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import hrLocale from './'

describe('hr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof hrLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof hrLocale.format === 'object')
  })
})
