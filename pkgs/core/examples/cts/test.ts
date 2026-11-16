const { addDays, format } = require("date-fns");
const { add } = require("date-fns/add");
const { addDays: fpAddDays } = require("date-fns/fp/addDays");

const date = addDays(new Date(2020, 0, 1), 1);

assertEqual(format(date, "yyyy-MM-dd"), "2020-01-02");
assertEqual(
  format(add(new Date(2020, 0, 1), { days: 2 }), "yyyy-MM-dd"),
  "2020-01-03",
);
assertEqual(
  format(fpAddDays(3, new Date(2020, 0, 1)), "yyyy-MM-dd"),
  "2020-01-04",
);

function assertEqual<Type>(actual: Type, expected: Type) {
  if (actual === expected) return;
  throw new Error(`Expected ${expected}, got ${actual}`);
}
