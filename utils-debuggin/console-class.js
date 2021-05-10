const fs = require("fs");

const out = fs.createWriteStream("./utils-debuggin/out.log");
const err = fs.createWriteStream("./utils-debuggin/err.log");

const consoleFile = new console.Console(out, err);

setInterval(() => {
  consoleFile.log(new Date());
  consoleFile.error(new Error("Opss!"));
}, 2000);

// node --inspect utils-debuggin/console-class.js

// Para hacer el inspect
