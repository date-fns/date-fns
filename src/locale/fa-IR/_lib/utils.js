var utils = {
  /**
   * Converts English numbers to Persian counterparts
   *
   * @api private
   * @method _englishNumber
   * @param {String} value
   * @return {Object} PersianJs Object
   */
  eng2per: value => {
    if (!value.toString().length) {
      return
    }
    value = value.toString()
    var englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']

    for (var i = 0, numbersLen = englishNumbers.length; i < numbersLen; i++) {
      value = value.replace(
        new RegExp(englishNumbers[i], 'g'),
        persianNumbers[i]
      )
    }
    return value
  }
}
export default utils
