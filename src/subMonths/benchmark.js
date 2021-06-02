// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import subMonths from '.'
import moment from 'moment'

suite('subMonths', function () {
  benchmark('date-fns', function () {
    return subMonths(this.date, 7)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(7, 'months')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
