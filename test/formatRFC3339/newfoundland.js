import formatRFC3339 from '../../src/formatRFC3339'
import assert from 'assert'

/**
 * America/St_Johns (Canada) is interesting for its negative to UTC time, with 30 minutes offset.
 * Bonus: It depends on Standard and Summer time.
 */
if (process.env.TZ !== 'America/St_Johns')
  throw new Error(
    'The test must be run with TZ=America/St_Johns (UTC-02:30 or UTC-03:30)'
  )

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

// Old date
assert.equal(
  formatRFC3339(new Date(1986, 3, 4, 10, 33, 1)),
  '1986-04-04T10:33:01-03:30'
)

// Standard time (Newfoundland and Labrador have -03:30)
assert.equal(
  formatRFC3339(new Date(2020, 0, 23, 5, 0, 54)),
  '2020-01-23T05:00:54-03:30'
)

// Summer time (Newfoundland and Labrador have -02:30)
assert.equal(
  formatRFC3339(new Date(2020, 6, 30, 20, 59, 1)),
  '2020-07-30T20:59:01-02:30'
)
