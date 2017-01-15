// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import filLocale from './'

describe('fil locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof filLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof filLocale.format === 'object')
  })
})
