import formatISO from '../../src/formatISO'
import assert from 'assert'

if (process.env.TZ !== 'Asia/Kolkata')
  throw new Error('The test must be run with TZ=Asia/Kolkata')

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

assert.equal(
  formatISO(new Date(1986, 3, 4, 10, 33, 1)),
  '1986-04-04T10:33:01+05:30'
)
