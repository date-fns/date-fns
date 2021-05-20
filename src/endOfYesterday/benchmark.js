// @flow
/* eslint-env mocha */
/* global benchmark */

import endOfYesterday from '.'

suite('endOfYesterday', () => {
  benchmark('date-fns', () => endOfYesterday())
})
