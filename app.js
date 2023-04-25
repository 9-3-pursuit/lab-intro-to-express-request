const express = require("express");
const app = express();
const pokemon = require("./pokemon.json");

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!
    99 Little Bugs In the Code
    99 little bugs in the code
    99 little bugs
    Pull one down
    Patch it around
    101 bugs in the code`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    '99 little bugs in the code<br><a href="/bugs/101">pull one down, patch it around</a>'
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const numberOfBugs = parseInt(req.params.numberOfBugs);
  if (numberOfBugs > 200) {
    res.send(
      `${numberOfBugs} little bugs in the code<br><a href="/bugs">Start over</a>`
    );
  } else {
    res.send(
      `${numberOfBugs} little bugs in the code<br><a href="/bugs/${
        numberOfBugs + 2
      }">pull one down, patch it around</a>`
    );
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon API!");
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const index = parseInt(req.params.indexOfArray);
  if (index >= 0 && index < pokemon.length) {
    res.json(pokemon[index]);
  } else {
    res.status(404).send(`Sorry, no pokemon found at /pokemon/${index}`);
  }
});

app.get("/pokemon/search", (req, res) => {
  const name = req.query.name;
  const result = pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (result) {
    res.json(result);
  } else {
    res.status(404).send(`Sorry, no pokemon found with the name: ${name}`);
  }
});