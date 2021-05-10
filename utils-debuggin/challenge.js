const fs = require("fs");
const colors = require("./consoleColor.json");

const out = fs.createWriteStream("./utils-debuggin/out.log");
const err = fs.createWriteStream("./utils-debuggin/err.log");

const print = new console.Console(out, err);

const verifyColor = (color) => {
  const isColor = Object.keys(colors).filter((co) => co === color);
  if (isColor.length > 0) {
    return true;
  }
  return false;
};

print.color = (color, msg = "") => {
  if (!color) {
    return console.log("Ingresa un color");
  }
  if (!verifyColor(color)) {
    return console.log("El color que ingresaste no es valido");
  }
  console.log(`\x1b${colors[color]}`, msg);
};

print.color("yellow", "Hola a todos");
