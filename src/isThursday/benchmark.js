// @flow
/* eslint-env mocha */
/* global benchmark */

import isThursday from '.'

suite(
  'isThursday',
  function () {
    benchmark('date-fns', function () {
      return isThursday(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
