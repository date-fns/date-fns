// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isFuture = require('./')

suite('isFuture', function () {
  benchmark('date-fns', function () {
    return isFuture(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
