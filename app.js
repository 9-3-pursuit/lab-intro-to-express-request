const express = require("express");
const path = require("path");

const app = express();

const pokemon = require("./models/pokemon.json");

const rootHandler = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./pages/home.html"));
};

const verbAdjectiveNounHandler = (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.status(200).send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
};

const tooManyBugsTemplate = () => `
  <h1>Too many bugs!! Start over!</h1>
  <a href="/">Back to home page</a>
`;

const bugsTemplate = (numOfBugs, nextNumOfBugs) => `
  <h1>${numOfBugs} little bugs in the code</h1>
  <a href="/bugs/${nextNumOfBugs}">Pull one down, patch it around</a>
`;

const bugsHandler = (req, res) => {
  res.status(200).send("99 little bugs in the code");
};

const tooManyBugsHandler = (req, res) => {
  const numOfBugs = Number(req.params.numberOfBugs);
  const nextNumOfBugs = numOfBugs + 2;

  if (numOfBugs >= 200) {
    res.status(501).send(tooManyBugsTemplate());
  } else {
    res.status(200).send(bugsTemplate(numOfBugs, nextNumOfBugs));
  }
};

const pokemonHandler = (req, res) => {
  res.status(200).json(pokemon);
};

const pokemonSearchHandler = (req, res) => {
  const [property] = Object.keys(req.query);
  const value = req.query[property];

  const pokemonFound = pokemon.filter((poke) => {
    if (property === "type") {
      return poke.type.includes(value);
    }

    if (property === "attack") {
      return parseInt(poke.stats.attack) >= parseInt(value);
    }

    return poke[property]?.toLowerCase() === value.toLowerCase();
  });

  // Harold Logic continued
  if (pokemonFound.length === 0) {
    res.status(404).json(pokemonFound);
    return;
  }
  res.status(200).json(pokemonFound);
};

const pokemonIndexHandler = (req, res) => {
  const indexOfPokemon = Number(req.params.index);

  if (!pokemon[indexOfPokemon]) {
    res.status(404).send(`Sorry, no pokemon found at ${indexOfPokemon}`);
    return;
  }

  res.status(200).json(pokemon[indexOfPokemon]);
};

app.get("/", rootHandler);
app.get("/:verb/:adjective/:noun", verbAdjectiveNounHandler);
app.get("/bugs", bugsHandler);
app.get("/bugs/:numberOfBugs", tooManyBugsHandler);
app.get("/pokemon", pokemonHandler);
app.get("/pokemon/search", pokemonSearchHandler);
app.get("/pokemon/:index", pokemonIndexHandler);

module.exports = app;
