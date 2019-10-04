function DateWithTimeZone(timeZone, timestamp) {
  var self = new Date(timestamp)
  self.__proto__ = DateWithTimeZone.prototype
  self.timeZone = timeZone
  return self
}

DateWithTimeZone.prototype.__proto__ = Date.prototype
DateWithTimeZone.prototype.setDate = Date.prototype.setUTCDate
DateWithTimeZone.prototype.getDate = Date.prototype.getUTCDate
DateWithTimeZone.prototype.setHours = Date.prototype.setUTCHours

export default DateWithTimeZone
