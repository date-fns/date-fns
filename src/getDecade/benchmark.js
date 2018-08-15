// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getDecade from '.'
import moment from 'moment'

suite('getDecade', function () {
  benchmark('date-fns', function () {
    return getDecade(this.date)
  })

  benchmark('Moment.js', function () {
    return Math.floor(this.moment.year() / 10) * 10
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
