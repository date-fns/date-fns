// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isISOMatch from '.'

suite(
  'isISOMatch',
  function () {
    benchmark('date-fns', function () {
      return isISOMatch(this.dateA)
    })
  },
  {
    setup: function () {
      this.dateA = new Date()
    },
  }
)
