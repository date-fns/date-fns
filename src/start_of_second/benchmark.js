// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfSecond = require('./')
var moment = require('moment')

suite('startOfSecond', function () {
  benchmark('date-fns', function () {
    return startOfSecond(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('second')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
