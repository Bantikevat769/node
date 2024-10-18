const { isUtf8 } = require("node:buffer");
const fs = require("node:fs");
fs.readFile("files.txt", "utf8", (err, data) => {
  console.log(data);
});

// fs.writeFile("file.txt", "welcome my project ", (err) => {
//   console.log("file is created");
// });
// fs.readFile("file.txt", "utf8", (err, data) => {
//   console.log(data);
// });

// fs.appendFile("file.txt", "welcome  haul project ", (err) => {
//   console.log("file is created");
// });
// fs.readFile("file.txt", "utf8", (err, data) => {
//   console.log(data);
// });

// fs.unlink("file.txt", (err) => {
//   console.log("file is deleted");
// });

// fs.rmdir("file.txt", (err) => {
//   console.log("file is deleted");
// });

// fs.mkdir("file.txt", (err) => {
//   console.log("file is deleted");
// });

// fs.readdir("file.txt", (err, data) => {
//   console.log(data);
// });

// fs.rename("file.txt", "newfile.txt", (err) => {
//   console.log("file is deleted");
// });

fs.stat("newfile.txt", (err, data) => {
  console.log(data);
});
