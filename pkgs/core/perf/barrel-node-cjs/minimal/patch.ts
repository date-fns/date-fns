#!/usr/bin/env node

import fs from "node:fs";

const dateFnsPath = "./node_modules/date-fns";
const pkgPath = new URL(`${dateFnsPath}/package.json`, import.meta.url);

const pkgBakPath = new URL(`${dateFnsPath}/package.json.bak`, import.meta.url);
if (!fs.existsSync(pkgBakPath)) fs.copyFileSync(pkgPath, pkgBakPath);

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

for (const [key, value] of Object.entries(pkg.exports)) {
  // Conditions are matched in order: Node must select CommonJS before import.
  const { require: requirePath, import: importPath } = value as {
    require: string;
    import: string;
  };
  pkg.exports[key] = {
    require: requirePath,
    node: requirePath,
    import: importPath,
  };
  pkg.exports[key].node = requirePath;
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
