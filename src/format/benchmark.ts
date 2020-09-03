// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import format from '.'
// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/opudalo/playground/opudalo/date-fn... Remove this comment to see the full error message
import moment from 'moment'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('format', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
    return format(this.date, 'dddd, MMMM Do YYYY, h:mm:ss a')
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('Moment.js', function () {
    return this.moment.format('dddd, MMMM Do YYYY, h:mm:ss a')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
