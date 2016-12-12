// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var distanceInWordsToNow = require('./')
var moment = require('moment')

suite('distanceInWordsToNow', function () {
  benchmark('date-fns', function () {
    return distanceInWordsToNow(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.toNow()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
