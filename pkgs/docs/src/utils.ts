import type {
  CommentDisplayPart,
  CommentTag,
  ContainerReflection,
  DeclarationReflection,
  SignatureReflection,
  SomeType,
} from "typedoc";
import { DateFnsDocs } from "./types.js";

/**
 * Find reflection category in a reflection container.
 * @param ref - the reflection to look for a function category in
 * @param id - the reflection id
 * @returns the reflection category string if found
 */
export function findCategory(ref: ContainerReflection, id: number) {
  const category = ref.categories?.find((category) =>
    // TODO: Fix the type error if TypeDoc becomes more eloborate
    (category.children as unknown as number[]).includes(id),
  );
  return category?.title;
}

/**
 * Find reflection summary.
 * @param ref - the reflection
 * @returns the reflection summary string if found
 */
export function findSummary(
  ref: DeclarationReflection | SignatureReflection,
): string | undefined {
  return findTag(ref, "@summary");
}

/**
 * Find reflection description.
 * @param ref - the reflection
 * @returns the function description string if found
 */
export function findDescription(
  ref: DeclarationReflection | SignatureReflection,
): string | undefined {
  return findTag(ref, "@description");
}

/**
 * Find reflection examples.
 * @param ref - the reflection
 * @returns the reflection example strings
 */
export function findExamples(
  ref: DeclarationReflection | SignatureReflection,
): string[] {
  return findTags(ref, "@example");
}

/**
 * Find and join block tags content of the given type in a function.
 * @param ref - the function reflection
 * @param tag - the tags to find
 * @returns joint tags content
 */
export function findTags(
  ref: DeclarationReflection | SignatureReflection,
  tag: `@${string}`,
): string[] {
  const foundTags = ref.comment?.blockTags.filter((b) => b.tag === tag);
  if (!foundTags) return [];
  return foundTags.map(joinTag);
}

/**
 * Find and join block tag content of the given type in a reflection.
 * @param ref - the reflection
 * @param tag - the tag to find
 * @returns joint tag content or undefined if not found
 */
export function findTag(
  ref: DeclarationReflection | SignatureReflection,
  tag: `@${string}`,
): string | undefined {
  if (tag === "@summary" && ref.comment?.summary.length)
    return joinCommentParts(ref.comment.summary);

  const foundTag = ref.comment?.blockTags?.find((b) => b.tag === tag);
  return foundTag && joinTag(foundTag);
}

/**
 * Find default function in a reflection container.
 * @param ref - the reflection to look for a function in
 * @returns the function reflection
 */
export function findFn(
  ref: ContainerReflection,
): DeclarationReflection | undefined {
  return ref.children?.find(
    (child) =>
      child.kind === DateFnsDocs.ReflectionKind.Function &&
      child.name === ref.name,
  );
}

/**
 * Find function summary in a function.
 * @param fn - the function reflection
 * @returns the function summary string if found
 */
export function findFnSummary(fn: DeclarationReflection): string | undefined {
  return findFnTag(fn, "@summary");
}

/**
 * Find function description in a function.
 * @param fn - the function reflection
 * @returns the function description string if found
 */
export function findFnDescription(
  fn: DeclarationReflection,
): string | undefined {
  return findFnTag(fn, "@description");
}

/**
 * Find function description in a function.
 * @param fn - the function reflection
 * @returns the function description string if found
 */
export function findFnReturns(fn: DeclarationReflection): string | undefined {
  return findFnTag(fn, "@returns");
}

/**
 * Find function examples in a function.
 * @param fn - the function reflection
 * @returns the function example strings
 */
export function findFnExamples(fn: DeclarationReflection): string[] {
  return findFnTags(fn, "@example");
}

/**
 * Find and join block tags content of the given type in a function.
 * @param fn - the function reflection
 * @param tag - the tags to find
 * @returns joint tags content
 */
export function findFnTags(
  fn: DeclarationReflection,
  tag: `@${string}`,
): string[] {
  return (
    fn.signatures?.reduce<string[]>(
      (acc, signature) => acc.concat(findTags(signature, tag)),
      [],
    ) || []
  );
}

/**
 * Find and join block tag content of the given type in a function.
 * @param fn - the function reflection
 * @param tag - the tag to find
 * @returns joint tag content or undefined if not found
 */
export function findFnTag(
  fn: DeclarationReflection,
  tag: `@${string}`,
): string | undefined {
  if (!fn.signatures) return;
  for (const signature of fn.signatures) {
    const foundTag = findTag(signature, tag);
    if (!foundTag) continue;
    return foundTag;
  }
}

/**
 * Find function description in a signature.
 * @param signature - the function reflection
 * @returns the function description string if found
 */
export function findSignatureReturns(
  signature: SignatureReflection,
): string | undefined {
  return findTag(signature, "@returns");
}

/**
 * Joins block tag content into a string.
 * @param tag - the tag, which content should be joined
 * @returns joined tag content as string
 */
export function joinTag(tag: CommentTag): string {
  return joinCommentParts(tag.content);
}

/**
 * Joins comment parts into a string.
 * @param parts - the parts, which should be joined
 * @returns joined parts as string
 */
export function joinCommentParts(parts: CommentDisplayPart[]): string {
  return parts.map((c) => c.text).join("");
}

/**
 * Deeply traverses a type and calls the callback for each type.
 * @param type - the type to traverse
 * @param cb - the callback to call for each type
 */
export function traverseType(
  type: SomeType,
  cb: (ref: SomeType) => void,
): void {
  cb(type);

  // TODO: Join with switch?
  "typeArguments" in type &&
    type.typeArguments?.forEach((t) => traverseType(t, cb));

  switch (type.type) {
    // Nothing deep to traverse
    case "intrinsic":
    case "reference":
    case "literal":
    case "inferred":
    case "unknown":
      return;

    case "reflection":
      if ("signatures" in type.declaration) {
        type.declaration.signatures?.forEach((s) => {
          s.typeParameters?.forEach((t) => {
            t.type && traverseType(t.type, cb);
            t.default && traverseType(t.default, cb);
          });

          s.parameters?.forEach((p) => {
            p.type && traverseType(p.type, cb);
          });

          s.type && traverseType(s.type, cb);
        });
      } else {
        type.declaration.children?.forEach((r) => {
          r.typeParameters?.forEach((t) => {
            t.type && traverseType(t.type, cb);
            t.default && traverseType(t.default, cb);
          });

          r.type && traverseType(r.type, cb);
        });
      }
      return;

    case "array":
      return traverseType(type.elementType, cb);

    case "union":
    case "intersection":
      return type.types.forEach((t) => traverseType(t, cb));

    case "typeOperator":
      return traverseType(type.target, cb);

    case "tuple":
      return type.elements.forEach((t) => traverseType(t, cb));

    case "conditional":
      traverseType(type.checkType, cb);
      traverseType(type.extendsType, cb);
      traverseType(type.trueType, cb);
      traverseType(type.falseType, cb);
      return;

    case "mapped":
      traverseType(type.parameterType, cb);
      traverseType(type.templateType, cb);
      return;

    case "indexedAccess":
      traverseType(type.objectType, cb);
      traverseType(type.indexType, cb);
      return;

    case "query":
      traverseType(type.queryType, cb);
      return;

    case "predicate":
    case "optional":
    case "rest":
    default:
      console.error("Not supported type:");
      console.error(type);

      throw new Error("Not supported type: " + type.type);
  }
}
