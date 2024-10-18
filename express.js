const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("this first page node and express
    ");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
