// This is DST test for formatDistanceStrict in the Cairo timezone

import formatDistanceStrict from '../../../src/formatDistanceStrict'
import assert from 'assert'

if (process.env.TZ !== 'Africa/Cairo')
  throw new Error('The test must be run with TZ=Africa/Cairo')

assert.equal(
  formatDistanceStrict(
    new Date(1986, 3, 4, 10, 32, 0),
    new Date(1986, 4, 4, 10, 32, 0)
  ),
  '1 month'
)
