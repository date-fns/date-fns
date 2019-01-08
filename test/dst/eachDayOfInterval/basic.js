// This is basic DST test for eachDayOfInterval

import eachDayOfInterval from '../../../src/eachDayOfInterval'
import assert from 'assert'

if (process.env.TZ !== 'Asia/Damascus')
  throw new Error('The test must be run with TZ=Asia/Damascus')

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

assert.deepEqual(
  eachDayOfInterval({
    start: new Date(2020, 2, 26),
    end: new Date(2020, 2, 28)
  }).map(d => d.toString()),
  [
    'Thu Mar 26 2020 00:00:00 GMT+0200 (Eastern European Standard Time)',
    'Fri Mar 27 2020 01:00:00 GMT+0300 (Eastern European Summer Time)',
    'Sat Mar 28 2020 00:00:00 GMT+0300 (Eastern European Summer Time)'
  ]
)
