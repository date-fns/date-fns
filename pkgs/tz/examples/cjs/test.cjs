const { TZDate, tz } = require("@date-fns/tz");
const { tzOffset } = require("@date-fns/tz/tzOffset");
const { tzName } = require("@date-fns/tz/tzName");

const date = new TZDate(2020, 0, 1, "Asia/Singapore");

if (date.timeZone !== "Asia/Singapore")
  throw new Error("top-level require failed");

if (tzOffset("Asia/Singapore", date) !== 480)
  throw new Error("tzOffset require failed");

if (typeof tzName("Asia/Singapore", date) !== "string")
  throw new Error("tzName require failed");

if (typeof tz("Asia/Singapore") !== "function")
  throw new Error("tz require failed");
