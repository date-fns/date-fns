// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isSameDay from '.'
import moment from 'moment'

suite('isSameDay', function () {
  benchmark('date-fns', function () {
    return isSameDay(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'day')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
