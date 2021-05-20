// @flow
/* eslint-env mocha */
/* global benchmark */

import startOfToday from '.'

suite('startOfYesterday', () => {
  benchmark('date-fns', () => startOfToday())
})
