// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfToday from '.'

suite('startOfYesterday', () => {
  benchmark('date-fns', () => startOfToday())
})
