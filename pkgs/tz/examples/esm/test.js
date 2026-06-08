import { TZDate, tz } from "@date-fns/tz";
import { tzName } from "@date-fns/tz/tzName";
import { tzOffset } from "@date-fns/tz/tzOffset";

const date = new TZDate(2020, 0, 1, "Asia/Singapore");

if (date.timeZone !== "Asia/Singapore")
  throw new Error("top-level import failed");

if (tzOffset("Asia/Singapore", date) !== 480)
  throw new Error("tzOffset import failed");

if (typeof tzName("Asia/Singapore", date) !== "string")
  throw new Error("tzName import failed");

if (typeof tz("Asia/Singapore") !== "function")
  throw new Error("tz import failed");
