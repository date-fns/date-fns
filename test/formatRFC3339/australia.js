import formatRFC3339 from '../../src/formatRFC3339'
import assert from 'assert'

/**
 * Australia/Eucla (Australia) is interesting for its positive to UTC time, with 45 minutes offset.
 * It's independent from Standard and Summer time.
 */
if (process.env.TZ !== 'Australia/Eucla')
  throw new Error('The test must be run with TZ=Australia/Eucla (UTC+08:45)')

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

// Old date
assert.equal(
  formatRFC3339(new Date(1986, 3, 4, 10, 33, 1)),
  '1986-04-04T10:33:01+08:45'
)

// Standard time (Eucla have +08:45)
assert.equal(
  formatRFC3339(new Date(2020, 0, 23, 5, 0, 54)),
  '2020-01-23T05:00:54+08:45'
)

// Summer time (Eucla have +08:45)
assert.equal(
  formatRFC3339(new Date(2020, 6, 30, 20, 59, 1)),
  '2020-07-30T20:59:01+08:45'
)
