// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfYesterday from '.'

suite('endOfYesterday', () => {
  benchmark('date-fns', () => endOfYesterday())
})
