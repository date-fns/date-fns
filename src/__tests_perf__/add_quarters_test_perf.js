var addQuarters = require('../add_quarters')

suite('addQuarters', function() {
  benchmark('date-fns', function() {
    return addQuarters(this.date, 2)
  })

  benchmark('Moment.js', function() {
    return this.moment.add(2, 'quarters')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

