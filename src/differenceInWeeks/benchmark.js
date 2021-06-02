// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import differenceInWeeks from '.'
import moment from 'moment'

suite('differenceInWeeks', function () {
  benchmark('date-fns', function () {
    return differenceInWeeks(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'week')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
