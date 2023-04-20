const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>`);
});
module.exports = app;
