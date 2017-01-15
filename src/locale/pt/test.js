// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import ptLocale from './'

describe('pt locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof ptLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof ptLocale.format === 'object')
  })
})
