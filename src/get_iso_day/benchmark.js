// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getISODay = require('./')
var moment = require('moment')

suite('getISODay', function () {
  benchmark('date-fns', function () {
    return getISODay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekday()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
