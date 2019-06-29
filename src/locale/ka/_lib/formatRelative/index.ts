var formatRelativeLocale: any = {
  lastWeek: '[წინა] dddd LT[-ზე]',
  yesterday: '[გუშინ] LT[-ზე]',
  today: '[დღეს] LT[-ზე]',
  tomorrow: '[ხვალ] LT[-ზე]',
  nextWeek: '[შემდეგი] dddd LT[-ზე]',
  other: 'L'
}

export default function formatRelative(token: any, _date: any, _baseDate: any, _options: any) {
  return formatRelativeLocale[token]
}
