var addHours = require('../add_hours')

suite('addHours', function() {
  benchmark('date-fns', function() {
    return addHours(this.date, 3)
  })

  benchmark('Moment.js', function() {
    return this.moment.add(3, 'hours')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

