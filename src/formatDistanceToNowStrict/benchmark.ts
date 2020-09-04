// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import formatDistanceToNowStrict from '.'
import moment from 'moment'

suite(
  'formatDistanceToNowStrict',
  function() {
    benchmark('date-fns', function() {
      return formatDistanceToNowStrict(this.date)
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
