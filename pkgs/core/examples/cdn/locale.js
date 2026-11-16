import { testScript } from "./dom.js";

testScript({
  scripts: ["cdn.min.js", "locale/es/cdn.min.js"],

  run: (dom) => {
    const result = dom.window.eval(
      `window.dateFns.formatRelative(window.dateFns.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFns.locale.es })`,
    );
    console.log(result === "el domingo pasado a las 00:00");
  },
});
