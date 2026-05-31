export function convertLocaleToConst(input: string): string {
  return input.replace(/-([a-zA-Z])/g, (_, char) => char.toUpperCase());
}
