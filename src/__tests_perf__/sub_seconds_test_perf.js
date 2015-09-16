var subSeconds = require('../sub_seconds')

suite('subSeconds', function() {
  benchmark('date-fns', function() {
    return subSeconds(this.date, 100)
  })

  benchmark('Moment.js', function() {
    return this.moment.subtract(100, 'seconds')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

