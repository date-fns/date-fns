// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSoLastWeek = require('./')

suite('isSoLastWeek', function () {
  benchmark('date-fns', function () {
    return isSoLastWeek(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
