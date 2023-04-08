const express = require("express");
const app = express();

app.get("/", (req, response) => {
  response.send("Starting a new project");
});

module.exports = app;
