var getISOWeek = require('../get_iso_week')

suite('getISOWeek', function() {
  benchmark('date-fns', function() {
    return getISOWeek(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.isoWeek()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

