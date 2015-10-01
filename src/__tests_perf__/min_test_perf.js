var min = require('../min')

suite('min', function() {
  benchmark('date-fns', function() {
    return min(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function() {
    return moment.min(this.momentA, this.momentB)
  })
}, {
  setup: function() {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})

