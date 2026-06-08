import path from "path";
import { readFile } from "fs/promises";
import type {
  ContainerReflection,
  DeclarationReflection,
  ReferenceType,
  SomeType,
  TypeParameterReflection,
} from "typedoc";
import type { DateFnsDocs } from "./types.ts";
import { findFn, traverseType } from "./utils.ts";

/**
 * Reads and parses TypeDoc JSON and extracts reflections.
 * @param jsonPath - the path to the docs JSON
 * @returns parsed function reflections
 */
export async function readRefsFromJSON(
  config: DateFnsDocs.Config,
  configDir: string,
): Promise<DateFnsDocs.Reflection[]> {
  const jsonPath = path.resolve(configDir, config.json);
  const docs = await readDocsJSON(jsonPath);
  const map = typesMap(docs);

  return (
    docs.children?.reduce<DateFnsDocs.Reflection[]>((acc, reflection) => {
      // Use set to avoid duplicates
      const recoveredRefs = new Set<DeclarationReflection>();
      const refMap = typesMap(reflection);

      function recoverRefs(refl: DeclarationReflection) {
        const refs = extractRefs(refl);

        const missingRefs = new Set<number>();
        refs.forEach((id) => {
          if (refMap[id]) return;
          missingRefs.add(id);
        });

        missingRefs.forEach((id) => {
          const missingRef = map[id];
          if (!missingRef) return;

          recoveredRefs.add(missingRef);

          // Update map, to avoid adding types included with the missing ref
          refMap[id] = missingRef;
          Object.assign(refMap, typesMap(missingRef));

          // Recursively recover missing refs
          recoverRefs(missingRef);
        });
      }

      recoverRefs(reflection);

      const completedRef = {
        ...reflection,
        children: [...(reflection.children || []), ...recoveredRefs],
      } as DeclarationReflection;

      const fileName = completedRef.sources?.[0].fileName;
      const refOverrides = (fileName && config.kindsMap[fileName]) || undefined;

      if (refOverrides?.kind === "constants") {
        return acc.concat({
          kind: "constants",
          ref: completedRef,
          category: refOverrides?.category,
        });
      } else {
        const fn = findFn(reflection);
        if (!fn) return acc;

        return acc.concat({
          kind: "function",
          ref: completedRef,
          fn,
          category: refOverrides?.category,
        });
      }
    }, []) || []
  );
}

function extractRefs(refl: DeclarationReflection) {
  const refs = new Set<number>();

  traverseRefs(refl, (ref) => {
    // id might be undefined for some reason
    if (ref.target === undefined) return;
    refs.add(ref.target);
  });

  return refs;
}

interface RefType extends ReferenceType {
  target?: number;
}

function traverseRefs(refl: DeclarationReflection, cb: (ref: RefType) => void) {
  function extractRefFromType(type: SomeType) {
    if (type.type === "reference") cb(type);
  }

  refl.inheritedFrom && cb(refl.inheritedFrom);

  refl.type && traverseType(refl.type, extractRefFromType);

  refl.extendedTypes?.forEach(extractRefFromType);

  refl.typeParameters?.forEach(
    (rfl) => rfl.type && traverseType(rfl.type, extractRefFromType),
  );

  refl.children?.forEach((rfl) => traverseRefs(rfl, cb));

  "signatures" in refl &&
    refl.signatures?.forEach((signature) => {
      // @ts-ignore: TypeDoc don't have typeParameters but typeParameter
      (signature.typeParameter as TypeParameterReflection[])?.forEach((rfl) => {
        rfl.type && traverseType(rfl.type, extractRefFromType);
      });

      signature.parameters?.forEach((rfl) => {
        rfl.type && traverseType(rfl.type, extractRefFromType);
      });
    });
}

function typesMap(ref: ContainerReflection) {
  const map: Record<number, DeclarationReflection> = {};

  traverseTypes(ref, (r) => {
    if (map[r.id]) return;
    map[r.id] = r;
  });

  return map;
}

function traverseTypes(
  ref: ContainerReflection | DeclarationReflection,
  cb: (ref: DeclarationReflection) => void,
) {
  ref.children?.forEach((r) => {
    cb(r);
    traverseTypes(r, cb);
  });
}

/**
 * Reads and parses TypeDoc container reflection from a JSON file.
 * @param jsonPath - the path to the docs JSON
 * @returns parsed container reflection
 */
export async function readDocsJSON(
  jsonPath: string,
): Promise<ContainerReflection> {
  const docsJSON = await readFile(jsonPath, "utf8");
  return JSON.parse(docsJSON) as ContainerReflection;
}
