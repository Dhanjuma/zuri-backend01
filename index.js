const express = require("express");
const server = express();
const port = process.env.port || 4000;
const fs = require("fs");

//initialize express

//index router
server.get("/", (req, res) => {
  res.send("Hello world");
});

server.get("/show_data", (req, res) => {
  fs.readFile(__dirname + "/" + "data.json", "utf8", (err, data) => {
    res.send(data);
  });
});

server.listen(port, () => {
  console.log(`server is running at localhost:${port}`);
});
