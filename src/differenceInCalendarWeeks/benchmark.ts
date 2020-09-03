// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import differenceInCalendarWeeks from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('differenceInCalendarWeeks', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
    return differenceInCalendarWeeks(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
