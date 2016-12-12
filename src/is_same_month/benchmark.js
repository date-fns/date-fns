// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameMonth = require('./')
var moment = require('moment')

suite('isSameMonth', function () {
  benchmark('date-fns', function () {
    return isSameMonth(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'month')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
