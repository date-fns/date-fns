import { readFile } from "fs/promises";
import { JSDOM, ResourceLoader, VirtualConsole } from "jsdom";
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
const virtualConsole = new VirtualConsole();

virtualConsole.on("jsdomError", (error) => console.error(error));

const options = {
  runScripts: "dangerously",
  resources,
  virtualConsole,
};

export function testScript(props) {
  const {
    script,
    scripts,
    run,
    beforeParse,
    pkg = process.env.DATE_FNS_CDN_TEST_PKG || "@date-fns/cdn",
  } = props;

  const dom = new JSDOM(
    []
      .concat(script || scripts)
      .map((script) => {
        if (script.src) return `<script src="${script.src}"></script>`;

        const path = typeof script === "string" ? script : script.path;
        const scriptPkg = typeof script === "string" ? pkg : script.pkg;

        return `<script src="http://127.0.0.1:9182/node_modules/${scriptPkg}/${path}"></script>`;
      })
      .join("\n"),
    { ...options, beforeParse },
  );

  dom.window.addEventListener("load", () => run(dom));
}
