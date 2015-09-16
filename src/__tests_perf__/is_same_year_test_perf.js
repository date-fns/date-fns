var isSameYear = require('../is_same_year')

suite('isSameYear', function() {
  benchmark('date-fns', function() {
    return isSameYear(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function() {
    return this.momentA.isSame(this.momentB, 'year')
  })
}, {
  setup: function() {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})

