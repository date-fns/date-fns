import { TZDate } from "@date-fns/tz";

const date = new TZDate(new Date(), "UTC");

console.log("console.log(date)", date);
console.log("console.log(date.toString())", date.toString());
