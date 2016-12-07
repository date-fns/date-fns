// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as nlLocale from '.'

describe('nl locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof nlLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof nlLocale.format === 'object')
  })
})
