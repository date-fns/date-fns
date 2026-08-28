import { minify, transform } from "@swc/core";
import { readFile } from "fs/promises";
import watcher from "@parcel/watcher";
import { relative } from "path";
import { createBrotliCompress, constants } from "node:zlib";
import { Readable } from "stream";
import bytes from "bytes-iec";
import picocolors from "picocolors";

const { blue, green, gray, red } = picocolors;

const srcPath = relative(process.cwd(), process.argv[2]);
const watch = !!process.argv.find((arg) => arg === "--watch");
const debouncedMeasure = debounce(measure, 50);

measure();

if (watch)
  watcher.subscribe(process.cwd(), (error, events) => {
    if (error) {
      console.error("The filesystem watcher encountered an error:");
      console.error(error);
      process.exit(1);
    }

    events.forEach((event) => {
      if (event.type !== "create" && event.type !== "update") return;
      const path = relative(process.cwd(), event.path);
      if (srcPath !== path) return;
      debouncedMeasure();
    });
  });

let lastLength;
let lastSize;

async function measure() {
  const code = await readFile(srcPath, "utf-8");
  const processedCode = srcPath.endsWith(".ts")
    ? await transform(code, {
        jsc: { target: "esnext", parser: { syntax: "typescript" } },
      })
    : code;

  minify(processedCode, {
    compress: true,
    mangle: true,
    sourceMap: false,
    module: true,
  })
    .then(({ code }) => Promise.all([code, measureSize(code)]).then([code]))
    .then(([code, size]) => {
      if (code.length === lastLength && size === lastSize) return;

      watch && console.clear();
      console.log(`Last write: ${blue(new Date().toString())}`);
      console.log("");
      console.log("Source code:");
      console.log("");
      console.log(gray(code));
      console.log("");
      console.log(
        `Length: ${blue(code.length)} ${formatDiff(code.length - lastLength)}`,
      );
      console.log("");
      console.log(
        `Size: ${blue(bytes(size, { decimalPlaces: 3 }))} ${formatDiff(
          size - lastSize,
        )}`,
      );
      console.log("");

      lastLength = code.length;
      lastSize = size;
    });
}

function formatDiff(diff) {
  if (!diff) return "";
  return diff > 0 ? red(`+${diff}`) : green(diff);
}

function measureSize(code) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const stream = new Readable();
    stream.push(code);
    stream.push(null);

    let pipe = stream.pipe(
      createBrotliCompress({
        params: {
          [constants.BROTLI_PARAM_QUALITY]: 11, // Use maximum compression quality
        },
      }),
    );

    pipe.on("error", reject);
    pipe.on("data", (buf) => (size += buf.length));
    pipe.on("end", () => resolve(size));
  });
}

function debounce(func, waitFor) {
  let timeout;
  return (...args) => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
}
