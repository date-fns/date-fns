// @flow
/* eslint-env mocha */

/* global suite, benchmark */

import isThisMinute from '.'

suite(
  'isThisMinute',
  () => {
    benchmark('date-fns', function() {
      return isThisMinute(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
