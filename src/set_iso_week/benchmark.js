// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import setISOWeek from '.'
import moment from 'moment'

suite('setISOWeek', function () {
  benchmark('date-fns', function () {
    return setISOWeek(this.date, 10)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeek(10)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
