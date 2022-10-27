const express = require("express");
const server = express();
const port = process.env.port || 4000;
const fs = require("fs");

server.get("/", (req, res) => {
  fs.readFile(__dirname + "/" + "data.json", "utf8", (err, data) => {
    res.send(data);
  });
});

server.listen(port, () => {
  console.log(`server is running at localhost:${port}`);
});
