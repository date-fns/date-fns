console.log(
  `###### ${
    process.env.TZ ||
    Intl.DateTimeFormat("en-US", {
      timeZoneName: "longGeneric",
    })
      .format(new Date())
      .split(" ")
      .slice(1)
      .join(" ")
  } ######`,
);

function handle(fn, ...args) {
  const date = new Date(2020, 0, 1);

  console.log(`=== date.${fn}(${args.join(", ")}) ===`);
  console.log();
  print(date);
  console.log("->");

  date[fn](...args);

  print(date);
  console.log();
}

console.log();
console.log("************************************");
console.log("********** setUTCFullYear **********");
console.log("************************************");
console.log();

handle("setUTCFullYear", 2020);
handle("setUTCFullYear", 2020, 0);
handle("setUTCFullYear", 2020, 0, 1);

handle("setUTCFullYear", 2020, 48);
handle("setUTCFullYear", 2020, -8);

handle("setUTCFullYear", 2020, 14, 45);
handle("setUTCFullYear", 2020, -8, -60);

console.log();
console.log("************************************");
console.log("************ setUTCMonth ***********");
console.log("************************************");
console.log();

handle("setUTCMonth", 1);
handle("setUTCMonth", 1, 11);

handle("setUTCMonth", 48);
handle("setUTCMonth", -18);

handle("setUTCMonth", 18, 45);
handle("setUTCMonth", -18, -60);

console.log();
console.log("************************************");
console.log("************ setUTCDate ************");
console.log("************************************");
console.log();

handle("setUTCDate", 11);

handle("setUTCDate", 945);
handle("setUTCDate", -60);

console.log();
console.log("------------------------------------");
console.log("--------------- time ---------------");
console.log("------------------------------------");
console.log();

console.log();
console.log("************************************");
console.log("************ setUTCHours ***********");
console.log("************************************");
console.log();

handle("setUTCHours", 12);
handle("setUTCHours", 12, 34, 56, 789);

handle("setUTCHours", 30, 120, 120, 30000);
handle("setUTCHours", -30, -120, -120, -30000);

console.log();
console.log("************************************");
console.log("*********** setUTCMinutes **********");
console.log("************************************");
console.log();

handle("setUTCMinutes", 34);
handle("setUTCMinutes", 34, 56, 789);

handle("setUTCMinutes", 120, 120, 30000);
handle("setUTCMinutes", -120, -120, -30000);

console.log();
console.log("************************************");
console.log("*********** setUTCSeconds **********");
console.log("************************************");
console.log();

handle("setUTCSeconds", 56);
handle("setUTCSeconds", 56, 789);

handle("setUTCSeconds", 120, 30000);
handle("setUTCSeconds", -120, -30000);

console.log();
console.log("************************************");
console.log("******** setUTCMilliseconds ********");
console.log("************************************");
console.log();

handle("setUTCMilliseconds", 789);

handle("setUTCMilliseconds", 30000);
handle("setUTCMilliseconds", -30000);

function print(date) {
  console.log(`${format(date)} / ${date.toISOString()} (UTC)`);
}

function format(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds(),
  )}.${pad(date.getMilliseconds(), 3)}${tz(date)}`;
}

function pad(num, length = 2) {
  return num.toString().padStart(length, "0");
}

function tz(date) {
  return Intl.DateTimeFormat("en-US", {
    timeZoneName: "longOffset",
  })
    .format(date)
    .split(" ")[1]
    .slice(3);
}
