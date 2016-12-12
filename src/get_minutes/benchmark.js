// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getMinutes = require('./')
var moment = require('moment')

suite('getMinutes', function () {
  benchmark('date-fns', function () {
    return getMinutes(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.minutes()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
