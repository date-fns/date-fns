// This file is generated automatically by `scripts/build/fp.ts`. Please, don't change it.

import { parse as fn } from "../../parse/index.ts";
import { convertToFP } from "../_lib/convertToFP/index.ts";

export const parseWithOptions = convertToFP(fn, 4);
