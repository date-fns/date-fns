// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isYesterday from '.'

suite(
  'isYesterday',
  () => {
    benchmark('date-fns', function() {
      return isYesterday(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
