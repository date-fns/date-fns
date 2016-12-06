// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isLeapYear = require('./')
var moment = require('moment')

suite('isLeapYear', function () {
  benchmark('date-fns', function () {
    return isLeapYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isLeapYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
