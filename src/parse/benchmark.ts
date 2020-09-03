// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import parse from '.'
// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/opudalo/playground/opudalo/date-fn... Remove this comment to see the full error message
import moment from 'moment'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('parse', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 4 arguments, but got 3.
    return parse('Tuesday, January 10th 2017, 11:07:40 am', 'dddd, MMMM Do YYYY, h:mm:ss a', this.date)
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('Moment.js', function () {
    return moment('Tuesday, January 10th 2017, 11:07:40 am', 'dddd, MMMM Do YYYY, h:mm:ss a')
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
