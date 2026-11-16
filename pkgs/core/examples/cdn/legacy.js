import { testScript } from "./dom.js";

testScript({
  scripts: [
    { src: "http://127.0.0.1:9182/jquery.js" },
    "cdn.min.js",
    "fp/cdn.min.js",
    { src: "http://127.0.0.1:9182/jquery.js" },
    "locale/cdn.min.js",
    "locale/es/cdn.min.js",
    { src: "http://127.0.0.1:9182/jquery.js" },
  ],

  run: (dom) => {
    const addDaysResult = dom.window.eval(
      `window.dateFns.addDays(new Date(1987, 1, 11), 1).getDate()`,
    );
    const fpResult = dom.window.eval(
      `window.dateFns.fp.startOfWeekWithOptions({ weekStartsOn: 1 }, new Date(1987, 1, 11)).getDate()`,
    );
    const localeResult = dom.window.eval(
      `window.dateFns.formatRelative(window.dateFns.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFns.locale.es })`,
    );

    console.log(
      addDaysResult === 12 &&
        fpResult === 9 &&
        localeResult === "el domingo pasado a las 00:00" &&
        dom.window.$ === dom.window.jQuery &&
        dom.window.jQuery.version === "fixture" &&
        dom.window.jQuery.loaded === 3,
    );
  },

  pkg: "date-fns",
});
