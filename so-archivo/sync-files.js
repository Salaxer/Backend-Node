const fs = require("fs");

try {
  const file = process.argv[2];
  const content = fs.readFileSync(`./so-archivo/${file}`).toString();
  const lines = content.split("\n").length;
  console.log(lines);
} catch (error) {
  return console.error(error);
}
