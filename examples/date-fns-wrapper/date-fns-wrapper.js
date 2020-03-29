const format = require('date-fns/format')
const add = require('date-fns/add')
const locales = {
  ja: require('date-fns/locale/ja'),
  'en-US': require('date-fns/locale/en-US')
}
const acceptableKeys = [
  'years',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds'
]

const argumentCheck = function(dateFormat, duration, locale) {
  // Type check
  if (typeof dateFormat !== 'string') {
    throw new Error('dateFormat should be string')
  } else if (!(duration.constructor == Object)) {
    throw new Error('duration should be dict')
  } else if (typeof locale !== 'string') {
    throw new Error('locale should be string')
  }

  const unacceptableKeys = Object.keys(duration).filter(function(key) {
    return !acceptableKeys.includes(key)
  })
  const notIntValues = Object.values(duration).filter(function(value) {
    return typeof value !== 'number'
  })
  if (unacceptableKeys.length > 0) {
    const errMsg =
      'There are some unacceptable keys such as ' +
      unacceptableKeys +
      '. Only ' +
      acceptableKeys +
      ' are acceptable'
    throw new Error(errMsg)
  } else if (notIntValues.length > 0) {
    const errMsg = 'duration values should only contain numbers.'
    throw new Error(errMsg)
  }

  if (!Object.keys(locales).includes(locale)) {
    throw new Error(
      'No such locale supported. Currently we only support `ja` or `en-US` for locale'
    )
  }
}

module.exports = function(dateFormat, duration, locale) {
  argumentCheck(dateFormat, duration, locale)
  if (dateFormat === '') {
    return ''
  }

  const date = add(new Date(), duration)
  return format(date, dateFormat, { locale: locales[locale] })
}
