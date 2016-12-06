// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getDaysInMonth = require('./')
var moment = require('moment')

suite('getDaysInMonth', function () {
  benchmark('date-fns', function () {
    return getDaysInMonth(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.daysInMonth()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
