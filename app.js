const express = require("express");
const app = express();

app.get("/", (req, response) => {
  response.send("Starting a new project");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const verb = req.params.verb;
  const adjective = req.params.adjective;
  const noun = req.params.noun;
  const message = `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`;
  res.send(message);
});

module.exports = app;
