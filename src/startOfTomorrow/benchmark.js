// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfTomorrow from '.'

suite('startOfTomorrow', () => {
  benchmark('date-fns', () => startOfTomorrow())
})
