var setHours = require('../set_hours')

suite('setHours', function() {
  benchmark('date-fns', function() {
    return setHours(this.date, 14)
  })

  benchmark('Moment.js', function() {
    return this.moment.hours(14)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

