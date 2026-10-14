// Keep parsed fields in UTC until the explicit offset is applied.
export class UTCDate extends Date {
  override getTimezoneOffset() {
    return 0;
  }
}

const re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
  if (re.test(method)) {
    const utcMethod = Date.prototype[method.replace(re, "$1UTC") as keyof Date];
    if (utcMethod)
      Object.defineProperty(UTCDate.prototype, method, { value: utcMethod });
  }
});
