// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import eachMinuteOfInterval from '.'

suite(
  'eachMinuteOfInterval',
  function() {
    benchmark('date-fns', function() {
      return eachMinuteOfInterval({ start: this.dateA, end: this.dateB })
    })
  },
  {
    setup: function() {
      this.dateA = new Date()
      this.dateB = new Date(this.dateA.getTime() + 300000)
    }
  }
)
