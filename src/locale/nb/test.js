// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as nbLocale from '.'

describe('nb locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof nbLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof nbLocale.format === 'object')
  })
})
