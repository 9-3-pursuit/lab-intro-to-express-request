const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/:param1/:param2/:param3", (req, res) => {
  const { param1, param2, param3 } = req.params;
  res.send(`Congratulations on starting a new project called ${param1}-${param2}-${param3}!`);
});

module.exports = app;
