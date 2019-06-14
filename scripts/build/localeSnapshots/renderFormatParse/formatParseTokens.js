const yearDates = [
  new Date(1987, 1, 11, 12, 13, 14, 15),
  new Date(0, 0, 1, 12, 13, 14, 15).setFullYear(5, 0, 1)
]

const quarterDates = [
  new Date(2019, 0, 1, 12, 13, 14, 15),
  new Date(2019, 3, 1, 12, 13, 14, 15)
]

const monthDates = [
  new Date(2019, 1, 11, 12, 13, 14, 15),
  new Date(2019, 6, 10, 12, 13, 14, 15)
]

const weekOfYearDates = [
  new Date(2019, 0, 1, 12, 13, 14, 15),
  new Date(2019, 11, 1, 12, 13, 14, 15)
]

const dayOfMonthDates = [
  new Date(2019, 1, 11, 12, 13, 14, 15),
  new Date(2019, 1, 28, 12, 13, 14, 15)
]

const dayOfYearDates = [
  new Date(2019, 1, 11, 12, 13, 14, 15),
  new Date(2019, 11, 31, 12, 13, 14, 15)
]

const dayOfWeekDates = [
  new Date(2019, 1, 11, 12, 13, 14, 15),
  new Date(2019, 1, 15, 12, 13, 14, 15)
]

const tzDates = [new Date(2019, 1, 11, 12, 13, 14, 15)]

const timestampDates = [0, 540000000000]

const timeOfDayDates = [
  new Date(2019, 1, 11, 11, 13, 14, 15),
  new Date(2019, 1, 11, 14, 13, 14, 15),
  new Date(2019, 1, 11, 19, 13, 14, 15),
  new Date(2019, 1, 11, 2, 13, 14, 15)
]

const hourDates = [
  new Date(2019, 1, 11, 11, 13, 14, 15),
  new Date(2019, 1, 11, 23, 13, 14, 15)
]

const localizedDates = [
  new Date(1987, 1, 11, 12, 13, 14, 15),
  new Date(1453, 4, 29, 23, 59, 59, 999)
]

const formatParseTokens = [
  {
    title: 'Era',
    tokens: ['G', 'GG', 'GGG', 'GGGG', 'GGGGG'],
    dates: [
      new Date(1987, 1, 11, 12, 13, 14, 15),
      new Date(-2500, 1, 1, 12, 13, 14, 15)
    ]
  },

  {
    title: 'Calendar year',
    tokens: ['y', 'yo', 'yy', 'yyy', 'yyyy', 'yyyyy'],
    dates: yearDates
  },

  {
    title: 'Local week-numbering year',
    tokens: ['Y', 'Yo', 'YY', 'YYY', 'YYYY', 'YYYYY'],
    dates: yearDates,
    options: { useAdditionalWeekYearTokens: true }
  },

  {
    title: 'ISO week-numbering year',
    tokens: ['R', 'RR', 'RRR', 'RRRR', 'RRRRR'],
    dates: yearDates
  },

  {
    title: 'Extended year',
    tokens: ['u', 'uu', 'uuu', 'uuuu', 'uuuuu'],
    dates: yearDates
  },

  {
    title: 'Quarter (formatting)',
    tokens: ['Q', 'Qo', 'QQ', 'QQQ', 'QQQQ', 'QQQQQ'],
    dates: quarterDates
  },

  {
    title: 'Quarter (stand-alone)',
    tokens: ['q', 'qo', 'qq', 'qqq', 'qqqq', 'qqqqq'],
    dates: quarterDates
  },

  {
    title: 'Month (formatting)',
    tokens: ['M', 'Mo', 'MM', 'MMM', 'MMMM', 'MMMMM'],
    dates: monthDates
  },

  {
    title: 'Month (stand-alone)	',
    tokens: ['L', 'Lo', 'LL', 'LLL', 'LLLL', 'LLLLL'],
    dates: monthDates
  },

  {
    title: 'Local week of year',
    tokens: ['w', 'wo', 'ww'],
    dates: weekOfYearDates
  },

  {
    title: 'ISO week of year',
    tokens: ['I', 'Io', 'II'],
    dates: weekOfYearDates
  },

  {
    title: 'Day of month',
    tokens: ['d', 'do', 'dd'],
    dates: dayOfMonthDates
  },

  {
    title: 'Day of year',
    tokens: ['D', 'Do', 'DD', 'DDD', 'DDDD'],
    dates: dayOfYearDates,
    options: { useAdditionalDayOfYearTokens: true }
  },

  {
    title: 'Day of week (formatting)',
    tokens: ['E', 'EE', 'EEE', 'EEEE', 'EEEEE', 'EEEEEE'],
    dates: dayOfWeekDates
  },

  {
    title: 'ISO day of week (formatting)',
    tokens: ['i', 'io', 'ii', 'iii', 'iiii', 'iiiii', 'iiiiii'],
    dates: dayOfWeekDates
  },

  {
    title: 'Local day of week (formatting)',
    tokens: ['e', 'eo', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'],
    dates: dayOfWeekDates
  },

  {
    title: 'Local day of week (stand-alone)',
    tokens: ['c', 'co', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc'],
    dates: dayOfWeekDates
  },

  {
    title: 'AM, PM',
    tokens: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
    dates: timeOfDayDates
  },

  {
    title: 'AM, PM, noon, midnight',
    tokens: ['b', 'bb', 'bbb', 'bbbb', 'bbbbb'],
    dates: timeOfDayDates
  },

  {
    title: 'Flexible day period',
    tokens: ['B', 'BB', 'BBB', 'BBBB', 'BBBBB'],
    dates: timeOfDayDates
  },

  {
    title: 'Hour [1-12]',
    tokens: ['h', 'ho', 'hh'],
    dates: hourDates
  },

  {
    title: 'Hour [0-23]',
    tokens: ['H', 'Ho', 'HH'],
    dates: hourDates
  },

  {
    title: 'Hour [0-11]',
    tokens: ['K', 'Ko', 'KK'],
    dates: hourDates
  },

  {
    title: 'Hour [1-24]',
    tokens: ['k', 'ko', 'kk'],
    dates: hourDates
  },

  {
    title: 'Minute',
    tokens: ['m', 'mo', 'mm'],
    dates: [
      new Date(2019, 0, 1, 12, 1, 14, 15),
      new Date(2019, 3, 1, 12, 55, 14, 15)
    ]
  },

  {
    title: 'Second',
    tokens: ['s', 'so', 'ss'],
    dates: [
      new Date(2019, 0, 1, 12, 13, 1, 15),
      new Date(2019, 3, 1, 12, 13, 55, 15)
    ]
  },

  {
    title: 'Fraction of second',
    tokens: ['S', 'SS', 'SSS', 'SSSS'],
    dates: [
      new Date(2019, 0, 1, 12, 13, 14, 1),
      new Date(2019, 3, 1, 12, 13, 14, 999)
    ]
  },

  {
    title: 'Timezone (ISO-8601 w/ Z)',
    tokens: ['X', 'XX', 'XXX', 'XXXX', 'XXXXX'],
    dates: tzDates
  },

  {
    title: 'Timezone (ISO-8601 w/o Z)',
    tokens: ['x', 'xx', 'xxx', 'xxxx', 'xxxxx'],
    dates: tzDates
  },

  {
    title: 'Timezone (GMT)',
    tokens: ['O', 'OO', 'OOO', 'OOOO'],
    dates: tzDates,
    skipParse: true
  },

  {
    title: 'Timezone (specific non-locat.)',
    tokens: ['z', 'zz', 'zzz', 'zzzz'],
    dates: tzDates,
    skipParse: true
  },

  {
    title: 'Seconds timestamp',
    tokens: ['t', 'tt'],
    dates: timestampDates
  },

  {
    title: 'Milliseconds timestamp',
    tokens: ['T', 'TT'],
    dates: timestampDates
  },

  {
    title: 'Long localized date',
    tokens: ['P', 'PP', 'PPP', 'PPPP'],
    dates: localizedDates
  },

  {
    title: 'Long localized time',
    tokens: ['p', 'pp', 'ppp', 'pppp'],
    dates: localizedDates
  },

  {
    title: 'Combination of date and time',
    tokens: ['Pp', 'PPpp', 'PPPppp', 'PPPPpppp'],
    dates: localizedDates
  }
]
export default formatParseTokens
