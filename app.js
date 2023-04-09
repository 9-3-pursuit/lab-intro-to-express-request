const express = require("express");

const app = express();

app.get("/", () => {
  res.status(200).send("Home Page");
});
module.exports = app;
