/* eslint-env mocha */

import assert from 'assert'
import { useDecimals } from '.'

describe('useDecimals', () => {
  it('does not change num when does not set options', () => {
    const result = useDecimals(14)
    assert(!result.isDecimals)
    assert(result.num === 14)
  })

  it('set isDecimals and does not set digit, should default less than 2', () => {
    let result = useDecimals(14.1, { decimals: true })
    assert(result.isDecimals)
    assert(result.num === 14.1)

    result = useDecimals(14.13245, { decimals: true })
    assert(result.num === 14.13)
  })

  it('set isDecimals and digits', () => {
    const result = useDecimals(14.13245, { decimals: true, digits: 3 })
    assert(result.num === 14.132)
  })
})
