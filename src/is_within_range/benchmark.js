// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isWithinRange = require('./')
var moment = require('moment')

suite('isWithinRange', function () {
  benchmark('date-fns', function () {
    return isWithinRange(this.dateA, this.dateB, this.dateC)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isBetween(this.momentB, this.momentC)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() - 604800000)
    this.momentB = this.momentA.clone().subtract(7, 'days')
    this.dateC = new Date(this.dateA.getTime() + 604800000)
    this.momentC = this.momentA.clone().add(7, 'days')
  }
})
