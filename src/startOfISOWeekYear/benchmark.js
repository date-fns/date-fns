// @flow
/* eslint-env mocha */
/* global benchmark */

import startOfISOWeekYear from '.'

suite(
  'startOfISOWeekYear',
  function () {
    benchmark('date-fns', function () {
      return startOfISOWeekYear(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
