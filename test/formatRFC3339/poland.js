import formatRFC3339 from '../../src/formatRFC3339'
import assert from 'assert'

/**
 * Europe/Warsaw (Poland) is regular full-hours timezone
 */
if (process.env.TZ !== 'Europe/Warsaw')
  throw new Error(
    'The test must be run with TZ=Europe/Warsaw (UTC+02:00 or UTC+01:00)'
  )

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

// Old date
assert.equal(
  formatRFC3339(new Date(1986, 3, 4, 10, 33, 1)),
  '1986-04-04T10:33:01+02:00'
)

// Standard time (Warsaw have +01:00)
assert.equal(
  formatRFC3339(new Date(2020, 0, 23, 5, 0, 54)),
  '2020-01-23T05:00:54+01:00'
)

// Summer time (Warsaw have +02:00)
assert.equal(
  formatRFC3339(new Date(2020, 6, 30, 20, 59, 1)),
  '2020-07-30T20:59:01+02:00'
)
