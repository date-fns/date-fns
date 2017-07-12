// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getISOWeek from '.'
import moment from 'moment'

suite('getISOWeek', function () {
  benchmark('date-fns', function () {
    return getISOWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeek()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
