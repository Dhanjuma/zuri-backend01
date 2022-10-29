const express = require("express");
const server = express();
const port = process.env.port || 4000;
const fs = require("fs");

server.get("/", (req, res) => {
  res.send({
    slackUsername: "dhanjuma",
    backend: true,
    age: 21,
    bio: "I'm a student trying to boost my coding skills",
  });
});

server.listen(port, () => {
  console.log(`server is running at localhost:${port}`);
});
