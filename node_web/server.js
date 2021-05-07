const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "test/plain");
  res.end("hello World\n");
});

server.listen(8001);
console.log("servidor en la url: http://localhost:8000");
// No sirve esta
