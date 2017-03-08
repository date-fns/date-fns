// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isFriday from '.'

suite('isFriday', function () {
  benchmark('date-fns', function () {
    return isFriday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
