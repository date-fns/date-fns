// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as enLocale from '.'

describe('de locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof enLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof enLocale.format === 'object')
  })
})
