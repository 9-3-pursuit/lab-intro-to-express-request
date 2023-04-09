const express = require("express");

const app = express();

const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
  res.status(200).send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

app.get("/bugs", (req, res) => {
  res.send("99 little bugs in the code");
});

const tooManyBugsTemplate = () => `
  <h1>Too many bugs!! Start over!</h1>
  <a href="/">Back to home page</a>
`;

const bugsTemplate = (numOfBugs, nextNumOfBugs) => `
  <h1>${numOfBugs} little bugs in the code</h1>
  <a href="/bugs/${nextNumOfBugs}">Pull one down, patch it around</a>
`;

app.get("/bugs/:numberOfBugs", (req, res) => {
  const numOfBugs = Number(req.params.numberOfBugs);
  const nextNumOfBugs = numOfBugs + 2;

  if (numOfBugs >= 200) {
    res.send(tooManyBugsTemplate());
  } else {
    res.send(bugsTemplate(numOfBugs, nextNumOfBugs));
  }
});

app.get("/pokemon", (req, res) => {
  res.status(200).json(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const pokemonName = req.query.name;
  const pokemonFound = pokemon.filter((poke) => {
    return poke.name.toLowerCase() === pokemonName.toLowerCase();
  });
  res.json(pokemonFound);
});

app.get("/pokemon/:index", (req, res) => {
  const indexOfPokemon = Number(req.params.index);

  if (!pokemon[indexOfPokemon]) {
    res.send(`Sorry, no pokemon found at ${indexOfPokemon}`);
  }

  res.json(pokemon[indexOfPokemon]);
});

module.exports = app;
