const { addDays, format } = require("date-fns");
const { add } = require("date-fns/add");
const fp = require("date-fns/fp");

const date = addDays(new Date(2020, 0, 1), 1);

if (format(date, "yyyy-MM-dd") !== "2020-01-02")
  throw new Error("top-level require failed");

if (
  format(add(new Date(2020, 0, 1), { days: 2 }), "yyyy-MM-dd") !== "2020-01-03"
)
  throw new Error("subpath require failed");

if (typeof fp.addDays !== "function") throw new Error("fp require failed");
