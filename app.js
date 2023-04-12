const pokemon = require("./models/pokemon.json");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    `   <h1>99 little bugs in the code</h1>
        <a href="http://localhost:8888/bugs/101">
          Pull one down, Patch it around
        </a>
    `
  );
});

app.get("/bugs/:number", (req, res) => {
  const { number } = req.params;
  if (number >= 200) {
    res.send("<h1>Too many bugs!! Start over!</h1>");
  }
  res.send(
    `<h1>${number} little bugs in the code</h1>
    <a href="http://localhost:8888/bugs/${
      Number(number) + 2
    }">Pull one down, patch it around</a>
    `
  );
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const foundPokemon = pokemon.find((p) => {
    return p.name.toLowerCase() === name.toLowerCase();
  });
  if (!foundPokemon) {
    res.send([]);
  } else {
    res.send([foundPokemon]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  const pokemonbyIndex = pokemon.find((p, i) => i == Number(indexOfArray));
  if (!pokemonbyIndex) {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  } else {
    res.send(pokemonbyIndex);
  }
});

module.exports = app;
