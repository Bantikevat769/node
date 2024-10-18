// Node.js ka built-in 'http' module import karo
const http = require("http");

// Hostname aur port define karo
const hostname = "127.0.0.1"; // localhost ka address
const port = 3000; // Port number

// Server banao jo http.createServer() method se banega
const server = http.createServer((req, res) => {
  // Response ka header set karo (status code aur content type)
  res.statusCode = 200; // 200 ka matlab hai OK
  res.setHeader("Content-Type", "text/html"); // Text plain format

  // Response bhejo: "Hello, World!"
  res.end("<h1>my name is banti kevat</h1>Hello, World!\n"); // Response ko "Hello, World!" message ke sath end karo
});

// Server ko start karo jo specified hostname aur port pe chalega
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
