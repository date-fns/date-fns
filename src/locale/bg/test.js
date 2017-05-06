// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import bgLocale from '.'

describe('bg locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof bgLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof bgLocale.format === 'object')
  })
})
