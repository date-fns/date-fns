const { UTCDate, utc } = require("@date-fns/utc");
const { UTCDateMini } = require("@date-fns/utc/date/mini");

const date = new UTCDate(2020, 0, 1);

if (date.getTimezoneOffset() !== 0) throw new Error("top-level require failed");

if (!(new UTCDateMini(2020, 0, 1) instanceof Date))
  throw new Error("date/mini require failed");

if (typeof utc !== "function") throw new Error("utc require failed");
