// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isThisYear from '.'

suite(
  'isThisYear',
  () => {
    benchmark('date-fns', function() {
      return isThisYear(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
