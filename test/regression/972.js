// This is a regression test for issue #972: https://github.com/date-fns/date-fns/issues/972

import format from '../../src/format'
import assert from 'assert'

if (process.env.TZ !== 'America/Sao_Paulo')
  throw new Error('The test must be run with TZ=America/Sao_Paulo')

const result = format('2018-11-04', 'yyyy-MM-dd HH:mm')
const expectation = '2018-11-04 01:00'
assert(
  result === expectation,
  `The result should be equal ${expectation} but got ${result}`
)
