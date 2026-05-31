import type { DeclarationReflection } from "typedoc";
import type { StringifiedJSON } from "typeroo/json";

export namespace DateFnsDocs {
  /**
   * The docs config.
   */
  export interface Config {
    /** The package to the package root. */
    package: string;
    /** The path to TypeDoc JSON. */
    json: string;
    /** The documentation categories in order. */
    categories: string[];
    /** The static documentation files. */
    files: StaticDoc[];
    /** Maps files to docs categories and kinds: constants, function (default type). */
    kindsMap: Record<
      string,
      {
        kind: TypeDocPage["kind"];
        category?: string;
      }
    >;
  }

  export interface StaticDoc {
    type: "markdown";
    slug: string;
    category: string;
    title: string;
    summary: string;
    path: string;
  }

  export type Reflection = FnReflection | ConstantsReflection;

  export interface ReflectionBase<Kind extends string> {
    /** The kind string. */
    kind: Kind;
    /** The module reflection. */
    ref: DeclarationReflection;
    /** Overridden category. */
    category: string | undefined;
  }

  /**
   * Function reflection container.
   */
  export interface FnReflection extends ReflectionBase<"function"> {
    /** The function reflection. */
    fn: DeclarationReflection;
  }

  /**
   * Constants reflection container.
   */
  export interface ConstantsReflection extends ReflectionBase<"constants"> {}

  /**
   * The submodule type.
   */
  export type Submodule = (typeof import("./consts.js").allSubmodules)[number];

  /**
   * The package model.
   */
  export interface Package {
    name: string;
    versions: VersionPreview[];
  }

  /**
   * Package version preview - a minimal version of {@link Version} for rendering
   * version picker.
   */
  export interface VersionPreview {
    version: string;
    preRelease: boolean;
    // TODO: Migrate to Date (or remove - it's unused in the website!)
    createdAt: number;
    submodules: Submodule[];
  }

  /**
   * The package version model.
   */
  export interface Version {
    package: string;
    version: string;
    preRelease: boolean;
    pages: PagePreview[];
    // TODO: Migrate to Date (or remove - it's unused in the website!)
    createdAt: number;
    categories: string[];
    submodules: Submodule[];
  }

  /**
   * Page preview - a minimal version of {@link Page} for rendering pages index.
   */
  export interface PagePreview extends Pick<
    Page,
    "slug" | "category" | "title" | "summary" | "submodules"
  > {
    // Old records don't have it
    type?: Page["type"];
  }

  /**
   * The page model.
   */
  export type Page = MarkdownPage | TypeDocPage | JSDocPage;

  /**
   * Base page model.
   */
  export interface PageBase {
    package: string;
    version: string;
    slug: string;
    category: string;
    title: string;
    summary: string;
    submodules: Submodule[];
  }

  /**
   * Generic Markdown page (used for v1, v2 and v3 documentation).
   */
  export interface MarkdownPage extends PageBase {
    type: "markdown";
    markdown: string;
  }

  /**
   * TypeDoc function page (v3).
   */
  export interface TypeDocPage extends PageBase {
    type: "typedoc";
    name: string;
    doc: StringifiedJSON<DeclarationReflection>;
    pure?: boolean;
    kind: "function" | "constants";
  }

  /**
   * JSDoc function page (used for v1 and v2 documentation).
   */
  export interface JSDocPage extends PageBase {
    type: "jsdoc";
    name: string;
    doc: StringifiedJSON<JSDocFunction>;
  }

  /**
   * JSDoc function definition (used for v1 and v2 documentation).
   */
  export interface JSDocFunction {
    args?: JSDocParam[];
    category: string;
    content: {
      category: string;
      description: string;
      examples?: string | string[];
      exceptions: JSDocAttribute[];
      id: string;
      kind: string;
      longname: string;
      meta: {
        filename: string;
        lineno: number;
        path: string;
      };
      name: string;
      order: number;
      properties?: JSDocParam[];
      params?: JSDocParam[];
      returns?: JSDocAttribute[];
      scope: string;
      summary: string;
      type?: JSDocType;
    };
    description: string;
    isFPFn?: boolean;
    kind: "function" | "typedef";
    relatedDocs?: {
      default?: string;
      fp?: string;
      fpWithOptions?: string;
    };
    syntax?: string;
    title: string;
    type: "jsdoc";
    urlId: string;
    usage?: FnUsage;
    usageTabs?: string[];
  }

  /**
   * JSDoc type, used to define function arguments and return values.
   */
  export interface JSDocType {
    names: string[];
  }

  /**
   * JSDoc attribute (return, exception, base for param).
   */
  export interface JSDocAttribute {
    description: string;
    type: JSDocType;
  }

  /**
   * JSDoc param.
   */
  export interface JSDocParam extends JSDocAttribute {
    name: string;
    optional?: boolean;
    defaultvalue?: string;
    variable?: boolean;
    props?: JSDocParam[];
  }

  /**
   * Usage map, was a part of the doc, now is generated on the fly.
   */
  export interface FnUsage {
    [usageTab: string]: {
      code: string;
      title: string;
      text?: string;
    };
  }

  /**
   * The copy of TypeDoc ReflectionKind enum. We copy it here to avoid importing
   * typedoc.
   */
  export enum ReflectionKind {
    Project = 1,
    Module = 2,
    Namespace = 4,
    Enum = 8,
    EnumMember = 16,
    Variable = 32,
    Function = 64,
    Class = 128,
    Interface = 256,
    Constructor = 512,
    Property = 1024,
    Method = 2048,
    CallSignature = 4096,
    IndexSignature = 8192,
    ConstructorSignature = 16384,
    Parameter = 32768,
    TypeLiteral = 65536,
    TypeParameter = 131072,
    Accessor = 262144,
    GetSignature = 524288,
    SetSignature = 1048576,
    TypeAlias = 2097152,
    Reference = 4194304,
    Document = 8388608,
  }
}
