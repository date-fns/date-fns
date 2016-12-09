// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isPast = require('./')

suite('isPast', function () {
  benchmark('date-fns', function () {
    return isPast(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
