const fs = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");

    res.end(data.toString());
  } else if (req.url === "/about") {
    res.end("<h1>about</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>contact</h1>");
  } else if (req.url === "/help") {
    res.end("<h1>help</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
