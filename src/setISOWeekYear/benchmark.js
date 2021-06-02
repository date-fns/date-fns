// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import setISOWeekYear from '.'
import moment from 'moment'

suite('setISOWeekYear', function () {
  benchmark('date-fns', function () {
    return setISOWeekYear(this.date, 2008)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekYear(2008)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
