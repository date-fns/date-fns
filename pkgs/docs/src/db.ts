import { schema, type Typesaurus } from "typesaurus";
import type { DateFnsDocs } from "./types.js";

export const db = schema(($) => ({
  packages: $.collection<DateFnsDocs.Package>(),
  versions: $.collection<DateFnsDocs.Version>(),
  pages: $.collection<DateFnsDocs.Page>(),
}));

export type Schema = Typesaurus.Schema<typeof db>;
