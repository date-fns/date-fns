// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import eachHourOfInterval from '.'

suite(
  'eachHourOfInterval',
  function() {
    benchmark('date-fns', function() {
      return eachHourOfInterval({ start: this.dateA, end: this.dateB })
    })
  },
  {
    setup: function() {
      this.dateA = new Date()
      this.dateB = new Date(this.dateA.getTime() + 604800000)
    }
  }
)
