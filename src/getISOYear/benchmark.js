// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getISOYear from '.'
import moment from 'moment'

suite('getISOYear', function () {
  benchmark('date-fns', function () {
    return getISOYear(this.date)
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
