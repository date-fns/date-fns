// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfMinute = require('./')
var moment = require('moment')

suite('startOfMinute', function () {
  benchmark('date-fns', function () {
    return startOfMinute(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('minute')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
