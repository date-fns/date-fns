// @flow
/* eslint-env mocha */
/* global benchmark */

import endOfToday from '.'

suite('endOfToday', () => {
  benchmark('date-fns', () => endOfToday())
})
