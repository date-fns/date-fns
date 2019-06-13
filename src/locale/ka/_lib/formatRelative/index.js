var formatRelativeLocale = {
  lastWeek: '[წინა] dddd LT[-ზე]',
  yesterday: '[გუშინ] LT[-ზე]',
  today: '[დღეს] LT[-ზე]',
  tomorrow: '[ხვალ] LT[-ზე]',
  nextWeek: '[შემდეგი] dddd LT[-ზე]',
  other: 'L'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
