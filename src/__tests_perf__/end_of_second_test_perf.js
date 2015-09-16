var endOfSecond = require('../end_of_second')

suite('endOfSecond', function() {
  benchmark('date-fns', function() {
    return endOfSecond(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.endOf('second')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

