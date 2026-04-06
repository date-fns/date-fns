import prettier from "prettier";

export function formatCode(
  code: string,
  parser: string = "babel",
): Promise<string> {
  return prettier.format(code, { parser });
}
