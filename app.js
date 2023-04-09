const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

app.get("/", (req, response) => {
  response.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const verb = req.params.verb;
  const adjective = req.params.adjective;
  const noun = req.params.noun;
  const message = `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`;
  res.send(message);
});

// Home page at `/bugs`
app.get("/bugs", (req, res) => {
  const message = "<h1>99 little bugs in the code</h1>";
  const link = '<a href="/bugs/101">pull one down, patch it around</a>';
  res.send(`${message} ${link}`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const message = `<h1>${numberOfBugs} little bugs in the code</h1>`;

  if (numberOfBugs >= 200) {
    const link = '<a href="/bugs">Too many bugs!! Start over!</a>';
    res.send(`${message} ${link}`);
  } else {
    const nextNumberOfBugs = Number(numberOfBugs) + 2;
    const link = `<a href="/bugs/${nextNumberOfBugs}">Pull one down, patch it around</a>`;
    res.send(`${message} ${link}`);
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

module.exports = app;
