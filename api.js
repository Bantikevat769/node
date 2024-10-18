const http = require("http");
const data = require("./index");
//  using api json

const hostname = "127.0.0.1"; // localhost ka address
const port = 3000; // Port number

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
