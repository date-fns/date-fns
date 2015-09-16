var setMinutes = require('../set_minutes')

suite('setMinutes', function() {
  benchmark('date-fns', function() {
    return setMinutes(this.date, 45)
  })

  benchmark('Moment.js', function() {
    return this.moment.minutes(45)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

