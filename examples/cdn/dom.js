import { JSDOM, ResourceLoader } from "jsdom";
import { readFile } from "fs/promises";
import { resolve } from "path";

class CustomResourceLoader extends ResourceLoader {
  async fetch(url) {
    const { pathname } = new URL(url);
    return readFile(resolve(process.cwd(), "." + pathname));
  }
}

const resources = new CustomResourceLoader({
  proxy: "http://127.0.0.1:9182",
  strictSSL: false,
});

const options = {
  runScripts: "dangerously",
  resources,
};

export function testScript(script, cb) {
  const dom = new JSDOM(
    []
      .concat(script)
      .map(
        (script) =>
          `<script src="http://127.0.0.1:9182/node_modules/date-fns/${script}"></script>`,
      )
      .join("\n"),
    options,
  );

  dom.window.addEventListener("DOMContentLoaded", () => cb(dom));
}
