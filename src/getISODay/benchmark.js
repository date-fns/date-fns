// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getISODay from '.'
import moment from 'moment'

suite('getISODay', function () {
  benchmark('date-fns', function () {
    return getISODay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekday()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
