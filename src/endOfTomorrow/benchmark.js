// @flow
/* eslint-env mocha */
/* global benchmark */

import endOfTomorrow from '.'

suite('endOfTomorrow', () => {
  benchmark('date-fns', () => endOfTomorrow())
})
