// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isToday = require('./')

suite('isToday', function () {
  benchmark('date-fns', function () {
    return isToday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
