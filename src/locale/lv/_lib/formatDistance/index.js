function buildLocalizeTokenFn(schema) {
  return function(count, options) {
    if (count === 1) {
      if (options.addSuffix) {
        return schema.one[0].replace('{{time}}', schema.one[2])
      } else {
        return schema.one[0].replace('{{time}}', schema.one[1])
      }
    } else {
      var rem = count % 10 === 1 && count % 100 !== 11
      if (options.addSuffix) {
        return schema.other[0]
          .replace('{{time}}', rem ? schema.other[3] : schema.other[4])
          .replace('{{count}}', count)
      } else {
        return schema.other[0]
          .replace('{{time}}', rem ? schema.other[1] : schema.other[2])
          .replace('{{count}}', count)
      }
    }
  }
}

var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    one: ['mazāk par {{time}}', 'sekundi', 'sekundi'],
    other: [
      'mazāk nekā {{count}} {{time}}',
      'sekunde',
      'sekundes',
      'sekundes',
      'sekundēm'
    ]
  }),

  xSeconds: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'sekunde', 'sekundes'],
    other: ['{{count}} {{time}}', 'sekunde', 'sekundes', 'sekundes', 'sekundēm']
  }),

  halfAMinute: function(count, options) {
    if (options.addSuffix) {
      return 'pusminūtes'
    } else {
      return 'pusminūte'
    }
  },

  lessThanXMinutes: buildLocalizeTokenFn({
    one: ['mazāk par {{time}}', 'minūti', 'minūti'],
    other: [
      'mazāk nekā {{count}} {{time}}',
      'minūte',
      'minūtes',
      'minūtes',
      'minūtēm'
    ]
  }),

  xMinutes: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'minūte', 'minūtes'],
    other: ['{{count}} {{time}}', 'minūte', 'minūtes', 'minūtes', 'minūtēm']
  }),

  aboutXHours: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'stunda', 'stundas'],
    other: [
      'apmēram {{count}} {{time}}',
      'stunda',
      'stundas',
      'stundas',
      'stundām'
    ]
  }),

  xHours: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'stunda', 'stundas'],
    other: ['{{count}} {{time}}', 'stunda', 'stundas', 'stundas', 'stundām']
  }),

  xDays: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'diena', 'dienas'],
    other: ['{{count}} {{time}}', 'diena', 'dienas', 'dienas', 'dienām']
  }),

  aboutXMonths: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'mēnesis', 'mēneša'],
    other: [
      'apmēram {{count}} {{time}}',
      'mēnesis',
      'mēneši',
      'mēneša',
      'mēnešiem'
    ]
  }),

  xMonths: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'mēnesis', 'mēneša'],
    other: ['{{count}} {{time}}', 'mēnesis', 'mēneši', 'mēneša', 'mēnešiem']
  }),

  aboutXYears: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'gads', 'gada'],
    other: ['apmēram {{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  }),

  xYears: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'gads', 'gada'],
    other: ['{{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  }),

  overXYears: buildLocalizeTokenFn({
    one: ['ilgāk par 1 {{time}}', 'gadu', 'gadu'],
    other: ['vairāk nekā {{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  }),

  almostXYears: buildLocalizeTokenFn({
    one: ['gandrīz 1 {{time}}', 'gads', 'gada'],
    other: ['vairāk nekā {{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  })
}

export default function formatDistance(token, count, options) {
  options = options || {}
  var result = formatDistanceLocale[token](count, options)

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'pēc ' + result
    } else {
      return 'pirms ' + result
    }
  }

  return result
}
