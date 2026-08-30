export function tpStartOfISOWeekYear(weekYear: number): Temporal.PlainDate {
  const fourthOfJanuary = Temporal.PlainDate.from({
    year: weekYear,
    month: 1,
    day: 4,
  });
  return fourthOfJanuary.subtract({ days: fourthOfJanuary.dayOfWeek - 1 });
}
