var startOfSecond = require('../start_of_second')

suite('startOfSecond', function() {
  benchmark('date-fns', function() {
    return startOfSecond(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.startOf('second')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

