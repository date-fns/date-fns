import { testScript } from "./dom.js";

testScript("fp/cdn.min.js", (dom) => {
  const result = dom.window.eval(
    `window.dateFns.fp.startOfWeekWithOptions({ weekStartsOn: 1 }, new Date(1987, 1, 11)).getDate()`,
  );
  console.log(result === 9);
});
