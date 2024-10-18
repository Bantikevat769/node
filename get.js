const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// Dummy data: Students ka ek array
let students = [
  { id: 1, name: "Amit Sharma" },
  { id: 2, name: "Priya Verma" },
];

const server = http.createServer((req, res) => {
  // Routing ke liye URL check karo
  if (req.url === "/students" && req.method === "GET") {
    // Students list return karo (GET request)
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(students)); // JSON format me data send karo
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found!" }));
  }
});

// Server ko start karo
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
