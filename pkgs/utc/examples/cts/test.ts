const { UTCDate, utc } = require("@date-fns/utc");
const { UTCDateMini } = require("@date-fns/utc/date/mini");

const date = new UTCDate(2020, 0, 1);

if (date.getTimezoneOffset() !== 0) throw new Error("top-level import failed");

if (!(new UTCDateMini(2020, 0, 1) instanceof Date))
  throw new Error("date/mini import failed");

if (typeof utc !== "function") throw new Error("utc import failed");
