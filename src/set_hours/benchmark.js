// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import setHours from '.'
import moment from 'moment'

suite('setHours', function () {
  benchmark('date-fns', function () {
    return setHours(this.date, 14)
  })

  benchmark('Moment.js', function () {
    return this.moment.hours(14)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
