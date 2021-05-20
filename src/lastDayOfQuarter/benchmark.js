// @flow
/* eslint-env mocha */
/* global benchmark */

import lastDayOfQuarter from '.'

suite(
  'lastDayOfQuarter',
  function () {
    benchmark('date-fns', function () {
      return lastDayOfQuarter(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
