// @flow
/* eslint-env mocha */
/* global suite, benchmark */

// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/opudalo/playground/opudalo/date-fn... Remove this comment to see the full error message
import moment from 'moment'
import formatDistanceToNow from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite(
  'formatDistanceToNow',
  () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
    benchmark('date-fns', function() {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      return formatDistanceToNow(this.date)
    })

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
    benchmark('Moment.js', function() {
      return this.moment.toNow()
    })
  },
  {
    setup: function() {
      this.date = new Date()
      this.moment = moment()
    }
  }
)
