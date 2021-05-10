const fs = require("fs");

fs.copyFile("./so-archivo/naranja.txt", "./so-archivo/limon.txt", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("Naranaj.txt fue copiado como limon.txt");
});
