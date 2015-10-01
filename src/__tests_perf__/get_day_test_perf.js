var getDay = require('../get_day')

suite('getDay', function() {
  benchmark('date-fns', function() {
    return getDay(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.day()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

