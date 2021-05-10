const fs = require("fs");

fs.mkdir("platzi/escuala-js/node", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
});
