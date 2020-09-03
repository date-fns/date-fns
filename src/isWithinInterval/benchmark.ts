// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isWithinInterval from '.'
// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/opudalo/playground/opudalo/date-fn... Remove this comment to see the full error message
import moment from 'moment'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('isWithinInterval', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    return isWithinInterval(this.dateA, {start: this.dateB, end: this.dateC})
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('Moment.js', function () {
    return this.momentA.isBetween(this.momentB, this.momentC)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() - 604800000)
    this.momentB = this.momentA.clone().subtract(7, 'days')
    this.dateC = new Date(this.dateA.getTime() + 604800000)
    this.momentC = this.momentA.clone().add(7, 'days')
  }
})
