import formatRFC3339 from '../../src/formatRFC3339'
import assert from 'assert'

/**
 * Asia/Kolkata (India) is interesting for its positive to UTC time, with 30 minutes offset.
 * It's independent from Standard and Summer time.
 */
if (process.env.TZ !== 'Asia/Kolkata')
  throw new Error('The test must be run with TZ=Asia/Kolkata')

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

// Old date
assert.equal(
  formatRFC3339(new Date(1986, 3, 4, 10, 33, 1)),
  '1986-04-04T10:33:01+05:30'
)

// Standard time (india always have +05:30)
assert.equal(
  formatRFC3339(new Date(2020, 0, 23, 5, 0, 54)),
  '2020-01-23T05:00:54+05:30'
)

// Summer time (india always have +05:30)
assert.equal(
  formatRFC3339(new Date(2020, 6, 30, 20, 59, 1)),
  '2020-07-30T20:59:01+05:30'
)
