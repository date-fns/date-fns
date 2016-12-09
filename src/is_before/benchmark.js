// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isBefore = require('./')
var moment = require('moment')

suite('isBefore', function () {
  benchmark('date-fns', function () {
    return isBefore(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isBefore(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
