export class UTCDateMini extends Date {
  constructor() {
    super();

    this.setTime(
      arguments.length === 0
        ? // Enables Vitest/Sinon fake timers that override the constructor
          Date.now()
        : arguments.length === 1
          ? typeof arguments[0] === "string"
            ? +new Date(arguments[0])
            : arguments[0]
          : Date.UTC(...arguments),
    );
  }

  getTimezoneOffset() {
    return 0;
  }
}

// Replace getter and setter functions with UTC counterparts
const re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
  if (re.test(method)) {
    const utcMethod = Date.prototype[method.replace(re, "$1UTC")];
    if (utcMethod) UTCDateMini.prototype[method] = utcMethod;
  }
});
