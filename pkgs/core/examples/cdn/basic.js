import { testScript } from "./dom.js";

testScript({
  script: "cdn.min.js",

  run: (dom) => {
    const result = dom.window.eval(
      `window.dateFns.addDays(new Date(1987, 1, 11), 1).getDate()`,
    );
    console.log(result === 12);
  },
});
