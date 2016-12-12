// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfHour = require('./')
var moment = require('moment')

suite('endOfHour', function () {
  benchmark('date-fns', function () {
    return endOfHour(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('hour')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
