import startOfHour from '../../../src/startOfHour'
import assert from 'assert'

if (process.env.TZ !== 'America/St_Johns')
  throw new Error('The test must be run with TZ=America/St_Johns')

const date = new Date(2014, 8 /* Sep */, 2, 11, 55)
const result = startOfHour(date)
assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
