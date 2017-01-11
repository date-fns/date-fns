// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as zhCnLocale from '.'

describe('zh_CN locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof zhCnLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof zhCnLocale.format === 'object')
  })
})
