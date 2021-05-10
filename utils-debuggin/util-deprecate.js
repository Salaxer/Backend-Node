const util = require("util");

const helloPluto = util.deprecate(() => {
  console.log("Hello Pluto");
}, "pluto is deprecated. Its not a planet any more");

helloPluto();
