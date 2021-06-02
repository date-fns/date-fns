// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import addSeconds from '.'
import moment from 'moment'

suite('addSeconds', function () {
  benchmark('date-fns', function () {
    return addSeconds(this.date, 15)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(15, 'seconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
