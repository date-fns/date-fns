#!/usr/bin/env node

import fs from "node:fs";

const dateFnsPath = "./node_modules/date-fns";
const pkgPath = new URL(`${dateFnsPath}/package.json`, import.meta.url);
const pkgBakPath = new URL(`${dateFnsPath}/package.json.bak`, import.meta.url);

if (fs.existsSync(pkgBakPath)) fs.copyFileSync(pkgBakPath, pkgPath);
