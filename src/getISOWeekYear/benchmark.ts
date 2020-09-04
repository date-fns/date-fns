// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getISOWeekYear from '.'
import moment from 'moment'

suite('getISOWeekYear', function () {
  benchmark('date-fns', function () {
    return getISOWeekYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
