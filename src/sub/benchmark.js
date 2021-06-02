// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import sub from '.'
import moment from 'moment'

suite(
  'add',
  function() {
    benchmark('date-fns', function() {
      return sub(this.date, { hours: 5, minutes: 10 })
    })

    benchmark('Moment.js', function() {
      return this.moment.subtract({ hours: 5, minutes: 10 })
    })
  },
  {
    setup: function() {
      this.date = new Date()
      this.moment = moment()
    }
  }
)
