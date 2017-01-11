// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as eoLocale from '.'

describe('eo locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof eoLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof eoLocale.format === 'object')
  })
})
