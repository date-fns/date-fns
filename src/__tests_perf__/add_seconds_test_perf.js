var addSeconds = require('../add_seconds')

suite('addSeconds', function() {
  benchmark('date-fns', function() {
    return addSeconds(this.date, 15)
  })

  benchmark('Moment.js', function() {
    return this.moment.add(15, 'seconds')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

