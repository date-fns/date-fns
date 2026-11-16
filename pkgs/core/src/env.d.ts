// Adds console.* types to the global scope without importing full DOM/node types.

export {};

declare global {
  const console: {
    log(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(...args: unknown[]): void;
  };
}
