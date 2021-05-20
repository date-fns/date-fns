// @flow
/* eslint-env mocha */
/* global benchmark */

import lastDayOfYear from '.'

suite(
  'lastDayOfYear',
  function () {
    benchmark('date-fns', function () {
      return lastDayOfYear(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
