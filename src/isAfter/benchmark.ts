// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isAfter from '.'
import moment from 'moment'

suite('isAfter', function () {
  benchmark('date-fns', function () {
    return isAfter(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isAfter(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
