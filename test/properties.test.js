// @flow
/* eslint-env mocha */

import fc from 'fast-check'
import format from '../src/format'
import parse from '../src/parse'

const isoPattern = `yyyy-MM-dd'T'HH:mm:ss.SSSXXX`

it('format should return the same string after parse', () => {
  fc.assert(
    fc.property(fc.date(), date => {
      const formatted = format(date, isoPattern)
      return (
        formatted ===
        format(parse(formatted, isoPattern, new Date()), isoPattern)
      )
    })
  )
})
