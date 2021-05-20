// @flow
/* eslint-env mocha */
/* global benchmark */

import startOfTomorrow from '.'

suite('startOfTomorrow', () => {
  benchmark('date-fns', () => startOfTomorrow())
})
