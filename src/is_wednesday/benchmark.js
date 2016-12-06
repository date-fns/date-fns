// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isWednesday = require('./')

suite('isWednesday', function () {
  benchmark('date-fns', function () {
    return isWednesday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
