// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import addYears from '.'
import moment from 'moment'

suite('addYears', function () {
  benchmark('date-fns', function () {
    return addYears(this.date, 20)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(20, 'years')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
