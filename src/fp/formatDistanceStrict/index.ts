// This file is generated automatically by `scripts/build/fp.ts`. Please, don't change it.

import { formatDistanceStrict as fn } from "../../formatDistanceStrict/index.ts";
import { convertToFP } from "../_lib/convertToFP/index.ts";

export const formatDistanceStrict = convertToFP(fn, 2);
