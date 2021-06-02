// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import subWeeks from '.'
import moment from 'moment'

suite('subWeeks', function () {
  benchmark('date-fns', function () {
    return subWeeks(this.date, 8)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(8, 'weeks')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
