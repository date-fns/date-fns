import watcher from "@parcel/watcher";
import { copyFile, mkdir } from "fs/promises";
import { glob } from "glob";
import { minimatch } from "minimatch";
import { dirname, join, relative } from "path";

const watch = !!process.argv.find((arg) => arg === "--watch");

const srcRegExp = /^src\//;
const patterns = ["src/**/*.d.ts", "package.json", "*.md"];

if (watch) {
  const debouncedCopy = debounceByArgs(copy, 100);

  watcher.subscribe(process.cwd(), (error, events) => {
    if (error) {
      console.error("The filesystem watcher encountered an error:");
      console.error(error);
      process.exit(1);
    }

    events.forEach((event) => {
      if (event.type !== "create" && event.type !== "update") return;
      const path = relative(process.cwd(), event.path);
      if (!patterns.some((pattern) => minimatch(path, pattern))) return;
      debouncedCopy(path);
    });
  });
} else {
  glob(patterns).then((paths) => Promise.all(paths.map(copy)));
}

async function copy(path) {
  const distPath = srcRegExp.test(path)
    ? path.replace(/^src/, "dist")
    : join("dist", path);
  const dir = dirname(distPath);
  await mkdir(dir, { recursive: true });
  await copyFile(path, distPath);
  console.log(`Copied ${path} to ${distPath}`);
}

export function debounceByArgs(func, waitFor) {
  const timeouts = {};

  return (...args) => {
    const argsKey = JSON.stringify(args);
    const later = () => {
      delete timeouts[argsKey];
      func(...args);
    };
    clearTimeout(timeouts[argsKey]);
    timeouts[argsKey] = setTimeout(later, waitFor);
  };
}
