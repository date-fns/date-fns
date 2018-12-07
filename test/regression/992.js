// This is a regression test for issue #992: https://github.com/date-fns/date-fns/issues/992

import toDate from '../../src/toDate'
import getDay from '../../src/getDay'
import assert from 'assert'

if (process.env.TZ !== 'America/Sao_Paulo')
  throw new Error('The test must be run with TZ=America/Sao_Paulo')

const result = getDay(toDate('2018-11-04'))
const expectation = 0
assert(
  result === expectation,
  `The result should be equal ${expectation} but got ${result}`
)
