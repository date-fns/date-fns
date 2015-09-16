var isSameMonth = require('../is_same_month')

suite('isSameMonth', function() {
  benchmark('date-fns', function() {
    return isSameMonth(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function() {
    return this.momentA.isSame(this.momentB, 'month')
  })
}, {
  setup: function() {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})

