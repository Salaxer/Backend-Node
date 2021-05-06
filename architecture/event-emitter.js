const EventEmitter = require("events");

class Logger extends EventEmitter {
  execute(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("After");
  }
}

const logger = new Logger();

logger.on("start", () => console.log("starting"));
logger.on("start", () => console.log("Start now"));
logger.on("finish", () => console.log("finishing"));
logger.on("finish", () => console.log("It's done"));

logger.execute(() => console.log("hello"));
