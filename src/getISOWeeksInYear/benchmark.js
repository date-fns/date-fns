// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getISOWeeksInYear from '.'
import moment from 'moment'

suite('getISOWeeksInYear', function () {
  benchmark('date-fns', function () {
    return getISOWeeksInYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeeksInYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
