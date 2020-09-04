// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfTomorrow from '.'

suite('endOfTomorrow', () => {
  benchmark('date-fns', () => endOfTomorrow())
})
