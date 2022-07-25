/* eslint-env mocha */

import assert from 'assert'
import getDatetimeLocal from '.'

describe('getDatetimeLocal', () => {
  it('returns the datetime-local of the type of input', () => {
    const result = getDatetimeLocal(new Date(2022, 3, 25, 17, 7))
    assert(result === '2022-04-25T17:07')
  })

  it('accepts a timestamp', () => {
    const result = getDatetimeLocal(new Date(2022, 3, 25, 17, 7).getTime())
    assert(result === '2022-04-25T17:07')
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getDatetimeLocal.bind(null), TypeError)
  })
})
