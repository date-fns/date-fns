var formatDistanceLocale = {
  lessThanXSeconds: {
    past: '{{count}} წამზე ნაკლები ხნის წინ',
    present: '{{count}} წამზე ნაკლები',
    future: '{{count}} წამზე ნაკლებში'
  },

  xSeconds: {
    past: '{{count}} წამის წინ',
    present: '{{count}} წამი',
    future: '{{count}} წამში'
  },

  halfAMinute: {
    past: 'ნახევარი წუთის წინ',
    present: 'ნახევარი წუთი',
    future: 'ნახევარი წუთში'
  },

  lessThanXMinutes: {
    past: '{{count}} წუთზე ნაკლები ხნის წინ',
    present: '{{count}} წუთზე ნაკლები',
    future: '{{count}} წუთზე ნაკლებში'
  },

  xMinutes: {
    past: '{{count}} წუთის წინ',
    present: '{{count}} წუთი',
    future: '{{count}} წუთში'
  },

  aboutXHours: {
    past: 'დაახლოებით {{count}} საათის წინ',
    present: 'დაახლოებით {{count}} საათი',
    future: 'დაახლოებით {{count}} საათში'
  },

  xHours: {
    past: '{{count}} საათის წინ',
    present: '{{count}} საათი',
    future: '{{count}} საათში'
  },

  xDays: {
    past: '{{count}} დღის წინ',
    present: '{{count}} დღე',
    future: '{{count}} დღეში'
  },

  aboutXMonths: {
    past: 'დაახლოებით {{count}} თვის წინ',
    present: 'დაახლოებით {{count}} თვე',
    future: 'დაახლოებით {{count}} თვეში'
  },

  xMonths: {
    past: '{{count}} თვის წინ',
    present: '{{count}} თვე',
    future: '{{count}} თვეში'
  },

  aboutXYears: {
    past: 'დაახლოებით {{count}} წლის წინ',
    present: 'დაახლოებით {{count}} წელი',
    future: 'დაახლოებით {{count}} წელში'
  },

  xYears: {
    past: '{{count}} წლის წინ',
    present: '{{count}} წელი',
    future: '{{count}} წელში'
  },

  overXYears: {
    past: '{{count}} წელზე მეტი ხნის წინ',
    present: '{{count}} წელზე მეტი',
    future: '{{count}} წელზე მეტი ხნის შემდეგ'
  },

  almostXYears: {
    past: 'თითქმის {{count}} წლის წინ',
    present: 'თითქმის {{count}} წელი',
    future: 'თითქმის {{count}} წელში'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (options.addSuffix && options.comparison > 0) {
    result = formatDistanceLocale[token].future.replace('{{count}}', count)
  } else if (options.addSuffix && options.comparison <= 0) {
    result = formatDistanceLocale[token].past.replace('{{count}}', count)
  } else {
    result = formatDistanceLocale[token].present.replace('{{count}}', count)
  }

  return result
}
