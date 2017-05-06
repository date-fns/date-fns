// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import deLocale from '.'

describe('de locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof deLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof deLocale.format === 'object')
  })
})
