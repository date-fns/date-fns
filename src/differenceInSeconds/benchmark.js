// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import differenceInSeconds from '.'
import moment from 'moment'

suite('differenceInSeconds', function () {
  benchmark('date-fns', function () {
    return differenceInSeconds(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'second')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
