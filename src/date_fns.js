var dateFns = {
  addDays: require('./add_days'),
  addMinutes: require('./add_minutes'),
  addMonths: require('./add_months'),
  eachDay: require('./each_day'),
  format: require('./format'),
  endOfDay: require('./end_of_day'),
  endOfMonth: require('./end_of_month'),
  endOfWeek: require('./end_of_week'),
  isAfter: require('./is_after'),
  isBefore: require('./is_before'),
  isEqual: require('./is_equal'),
  isFirstDayOfMonth: require('./is_first_day_of_month'),
  isFuture: require('./is_future'),
  isLastDayOfMonth: require('./is_last_day_of_month'),
  isSameMonth: require('./is_same_month'),
  isSameWeek: require('./is_same_week'),
  isSameYear: require('./is_same_year'),
  isToday: require('./is_today'),
  isWeekend: require('./is_weekend'),
  isWithinRange: require('./is_within_range'),
  setMonth: require('./set_month'),
  setYear: require('./set_year'),
  startOfDay: require('./start_of_day'),
  startOfMonth: require('./start_of_month'),
  startOfWeek: require('./start_of_week'),
  startOfYear: require('./start_of_year'),
  subDays: require('./sub_days'),
  subMinutes: require('./sub_minutes'),
  subMonths: require('./sub_months')
};

if (module && module.exports) {
  module.exports = dateFns;
} else {
  window.dateFns = dateFns;
}

