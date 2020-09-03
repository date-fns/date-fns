// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfToday from '.'

suite('endOfToday', () => {
  benchmark('date-fns', () => endOfToday())
})
