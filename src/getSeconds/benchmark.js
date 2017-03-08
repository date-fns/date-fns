// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getSeconds from '.'
import moment from 'moment'

suite('getSeconds', function () {
  benchmark('date-fns', function () {
    return getSeconds(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.seconds()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
