// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfToday from '.'

suite('startOfToday', () => {
  benchmark('date-fns', () => startOfToday())
})
