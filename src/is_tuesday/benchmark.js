// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isTuesday = require('./')

suite('isTuesday', function () {
  benchmark('date-fns', function () {
    return isTuesday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
