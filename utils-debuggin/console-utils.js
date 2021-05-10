// %s string
// %d number
// %j Json

console.log("Un %s y un %s", "gato", "gatito");
// console.info("Hello World");
// console.warn("Hello World");
// console.assert(42 === "42");

// console.trace("hello");
const utils = require("util");

const debuglog = utils.debuglog("foo");

debuglog("Hello from foo");
// NODE_DEBUG = foo node ....
