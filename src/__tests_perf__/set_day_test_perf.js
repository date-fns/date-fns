var setDay = require('../set_day')

suite('setDay', function() {
  benchmark('date-fns', function() {
    return setDay(this.date, 3)
  })

  benchmark('Moment.js', function() {
    return this.moment.day(3)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

