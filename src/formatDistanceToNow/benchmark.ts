// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import moment from 'moment'
import formatDistanceToNow from '.'

suite(
  'formatDistanceToNow',
  () => {
    benchmark('date-fns', function() {
      return formatDistanceToNow(this.date)
    })

    benchmark('Moment.js', function() {
      return this.moment.toNow()
    })
  },
  {
    setup: function() {
      this.date = new Date()
      this.moment = moment()
    }
  }
)
