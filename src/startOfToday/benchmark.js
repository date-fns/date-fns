// @flow
/* eslint-env mocha */
/* global benchmark */

import startOfToday from '.'

suite('startOfToday', () => {
  benchmark('date-fns', () => startOfToday())
})
