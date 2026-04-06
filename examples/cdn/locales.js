import { testScript } from "./dom.js";

testScript(["cdn.min.js", "locale/cdn.min.js"], (dom) => {
  const esResult = dom.window.eval(
    `window.dateFns.formatRelative(window.dateFns.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFns.locale.es })`,
  );
  const ruResult = dom.window.eval(
    `window.dateFns.formatRelative(window.dateFns.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFns.locale.ru })`,
  );
  console.log(
    esResult === "el domingo pasado a las 00:00" &&
      ruResult === "в прошлое воскресенье в 0:00",
  );
});
