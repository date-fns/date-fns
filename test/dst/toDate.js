// This is a DST test for toDate

import toDate from '../../src/toDate'
import assert from 'assert'

if (process.env.TZ !== 'America/Sao_Paulo')
  throw new Error('The test must be run with TZ=America/Sao_Paulo')

assert.equal(toDate('2018-11-03').getDate(), 3)
assert.equal(toDate('2018-11-04').getDate(), 4) // Into DST
assert.equal(toDate('2018-11-05').getDate(), 5)

assert.equal(toDate('2019-02-15').getDate(), 15)
assert.equal(toDate('2019-02-16').getDate(), 16) // From DST
assert.equal(toDate('2019-02-17').getDate(), 17)
