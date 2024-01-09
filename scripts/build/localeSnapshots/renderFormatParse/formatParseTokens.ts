const yearDates = [
  new Date(1987, 1, 11, 12, 13, 14, 15),
  new Date(0, 0, 1, 12, 13, 14, 15).setFullYear(5, 0, 1),
];

const quarterDates = [
  new Date(2019, 0, 1, 12, 13, 14, 15),
  new Date(2019, 3, 1, 12, 13, 14, 15),
];

const monthDates = [
  new Date(2019, 0, 11, 12, 13, 14, 15),
  new Date(2019, 1, 11, 12, 13, 14, 15),
  new Date(2019, 2, 11, 12, 13, 14, 15),
  new Date(2019, 3, 10, 12, 13, 14, 15),
  new Date(2019, 4, 10, 12, 13, 14, 15),
  new Date(2019, 5, 10, 12, 13, 14, 15),
  new Date(2019, 6, 10, 12, 13, 14, 15),
  new Date(2019, 7, 10, 12, 13, 14, 15),
  new Date(2019, 8, 10, 12, 13, 14, 15),
  new Date(2019, 9, 10, 12, 13, 14, 15),
  new Date(2019, 10, 10, 12, 13, 14, 15),
  new Date(2019, 11, 10, 12, 13, 14, 15),
];

const weekOfYearDates = [
  new Date(2019, 0, 1, 12, 13, 14, 15),
  new Date(2019, 11, 1, 12, 13, 14, 15),
];

const dayOfMonthDates = [
  new Date(2019, 1, 11, 12, 13, 14, 15),
  new Date(2019, 1, 28, 12, 13, 14, 15),
];

const dayOfYearDates = [
  new Date(2019, 1, 11, 12, 13, 14, 15),
  new Date(2019, 11, 31, 12, 13, 14, 15),
];

const dayOfWeekDates = [
  new Date(2019, 1, 11, 12, 13, 14, 15),
  new Date(2019, 1, 15, 12, 13, 14, 15),
];

const timeOfDayDates = [
  new Date(2019, 1, 11, 11, 13, 14, 15),
  new Date(2019, 1, 11, 14, 13, 14, 15),
  new Date(2019, 1, 11, 19, 13, 14, 15),
  new Date(2019, 1, 11, 2, 13, 14, 15),
];

const hourDates = [
  new Date(2019, 1, 11, 11, 13, 14, 15),
  new Date(2019, 1, 11, 23, 13, 14, 15),
];

const localizedDates = [
  new Date(1987, 0, 11, 12, 13, 14, 15),
  new Date(1987, 1, 11, 12, 13, 14, 15),
  new Date(1987, 2, 11, 12, 13, 14, 15),
  new Date(1987, 3, 11, 12, 13, 14, 15),
  new Date(1453, 4, 29, 23, 59, 59, 999),
  new Date(1987, 5, 11, 12, 13, 14, 15),
  new Date(1987, 6, 11, 12, 13, 14, 15),
  new Date(1987, 7, 11, 12, 13, 14, 15),
  new Date(1987, 8, 11, 12, 13, 14, 15),
  new Date(1987, 9, 11, 12, 13, 14, 15),
  new Date(1987, 10, 11, 12, 13, 14, 15),
  new Date(1987, 11, 11, 12, 13, 14, 15),
];

const formatParseTokens = [
  {
    title: "Calendar year",
    tokens: ["yo"],
    dates: yearDates,
  },

  {
    title: "Local week-numbering year",
    tokens: ["Yo"],
    dates: yearDates,
    options: { useAdditionalWeekYearTokens: true },
  },

  {
    title: "Quarter (formatting)",
    tokens: ["Qo", "QQQ", "QQQQ", "QQQQQ"],
    dates: quarterDates,
  },

  {
    title: "Quarter (stand-alone)",
    tokens: ["qo", "qqq", "qqqq"],
    dates: quarterDates,
  },

  {
    title: "Month (formatting)",
    tokens: ["Mo", "MMM", "MMMM", "MMMMM"],
    dates: monthDates,
  },

  {
    title: "Month (stand-alone)	",
    tokens: ["Lo", "LLL", "LLLL", "LLLLL"],
    dates: monthDates,
  },

  {
    title: "Local week of year",
    tokens: ["wo"],
    dates: weekOfYearDates,
  },

  {
    title: "ISO week of year",
    tokens: ["Io"],
    dates: weekOfYearDates,
  },

  {
    title: "Day of month",
    tokens: ["do"],
    dates: dayOfMonthDates,
  },

  {
    title: "Day of year",
    tokens: ["Do"],
    dates: dayOfYearDates,
    options: { useAdditionalDayOfYearTokens: true },
  },

  {
    title: "Day of week (formatting)",
    tokens: ["E", "EE", "EEE", "EEEE", "EEEEE", "EEEEEE"],
    dates: dayOfWeekDates,
  },

  {
    title: "ISO day of week (formatting)",
    tokens: ["io", "iii", "iiii", "iiiii", "iiiiii"],
    dates: dayOfWeekDates,
  },

  {
    title: "Local day of week (formatting)",
    tokens: ["eo", "eee", "eeee", "eeeee", "eeeeee"],
    dates: dayOfWeekDates,
  },

  {
    title: "Local day of week (stand-alone)",
    tokens: ["co", "ccc", "cccc", "ccccc", "cccccc"],
    dates: dayOfWeekDates,
  },

  {
    title: "AM, PM",
    tokens: ["a", "aa", "aaa", "aaaa", "aaaaa"],
    dates: timeOfDayDates,
  },

  {
    title: "AM, PM, noon, midnight",
    tokens: ["b", "bb", "bbb", "bbbb", "bbbbb"],
    dates: timeOfDayDates,
  },

  {
    title: "Flexible day period",
    tokens: ["B", "BB", "BBB", "BBBB", "BBBBB"],
    dates: timeOfDayDates,
  },

  {
    title: "Hour [1-12]",
    tokens: ["ho"],
    dates: hourDates,
  },

  {
    title: "Hour [0-23]",
    tokens: ["Ho"],
    dates: hourDates,
  },

  {
    title: "Hour [0-11]",
    tokens: ["Ko"],
    dates: hourDates,
  },

  {
    title: "Hour [1-24]",
    tokens: ["ko"],
    dates: hourDates,
  },

  {
    title: "Minute",
    tokens: ["mo"],
    dates: [
      new Date(2019, 0, 1, 12, 1, 14, 15),
      new Date(2019, 3, 1, 12, 55, 14, 15),
    ],
  },

  {
    title: "Second",
    tokens: ["so"],
    dates: [
      new Date(2019, 0, 1, 12, 13, 1, 15),
      new Date(2019, 3, 1, 12, 13, 55, 15),
    ],
  },

  {
    title: "Long localized date",
    tokens: ["P", "PP", "PPP", "PPPP"],
    dates: localizedDates,
  },

  {
    title: "Long localized time",
    tokens: ["p", "pp", "ppp", "pppp"],
    dates: localizedDates,
  },

  {
    title: "Combination of date and time",
    tokens: ["Pp", "PPpp", "PPPppp", "PPPPpppp"],
    dates: localizedDates,
  },
];
export default formatParseTokens;
