// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setMinutes = require('./')
var moment = require('moment')

suite('setMinutes', function () {
  benchmark('date-fns', function () {
    return setMinutes(this.date, 45)
  })

  benchmark('Moment.js', function () {
    return this.moment.minutes(45)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
