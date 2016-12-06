// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isMonday = require('./')

suite('isMonday', function () {
  benchmark('date-fns', function () {
    return isMonday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
