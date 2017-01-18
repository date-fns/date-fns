// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as ruLocale from '.'

describe('ru locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof ruLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof ruLocale.format === 'object')
  })
})
