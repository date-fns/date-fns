// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setMilliseconds = require('./')
var moment = require('moment')

suite('setMilliseconds', function () {
  benchmark('date-fns', function () {
    return setMilliseconds(this.date, 400)
  })

  benchmark('Moment.js', function () {
    return this.moment.milliseconds(400)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
