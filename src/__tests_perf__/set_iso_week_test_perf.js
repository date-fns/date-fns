var setISOWeek = require('../set_iso_week')

suite('setISOWeek', function() {
  benchmark('date-fns', function() {
    return setISOWeek(this.date, 10)
  })

  benchmark('Moment.js', function() {
    return this.moment.isoWeek(10)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

