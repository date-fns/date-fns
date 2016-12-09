// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfISOWeek = require('./')
var moment = require('moment')

suite('startOfISOWeek', function () {
  benchmark('date-fns', function () {
    return startOfISOWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('isoWeek')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
