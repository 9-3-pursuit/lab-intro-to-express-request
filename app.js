const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

module.exports = app;
