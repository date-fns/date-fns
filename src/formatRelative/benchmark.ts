// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import formatRelative from '.'
import moment from 'moment'

suite('formatRelative', function () {
  benchmark('date-fns', function () {
    return formatRelative(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.calendar(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
