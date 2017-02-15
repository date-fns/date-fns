// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isWednesday from '.'

suite('isWednesday', function () {
  benchmark('date-fns', function () {
    return isWednesday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
