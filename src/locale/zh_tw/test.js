// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as zhTwLocale from '.'

describe('zh_TW locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof zhTwLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof zhTwLocale.format === 'object')
  })
})
