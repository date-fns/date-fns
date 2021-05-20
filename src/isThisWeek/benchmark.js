// @flow
/* eslint-env mocha */

/* global benchmark */

import isThisWeek from '.'

suite(
  'isThisWeek',
  () => {
    benchmark('date-fns', function () {
      return isThisWeek(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
