const http = require("http");
const moment = require("moment");
const server = http.createServer();
// Esta arquitectura esta orientada a eventos, solo reacciona cuando algo lo manda a llamar.
server.on("request", (req, res) => {
  if (req.method === "POST" && req.url === "/echo") {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        body = JSON.parse(Buffer.concat(body).toString());
        var dayWrapper = moment(
          `${body.year}-${body.month}-${body.day}`
        ).format("dddd");
        if (dayWrapper == "Invalid date") {
          return res.end("Esa fecha no existe, corrige los valores.");
        }
        res.end(`Naciste el dia: ${dayWrapper}`);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(3000);
console.log("servidor en la url: http://localhost:3000");
