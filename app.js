const express = require("express");
const pokemon = require("./models/pokemon.json");

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
      `<h1>99 little bugs in the code</h1> <a href="/bugs/101">pull one down, patch it around</a>`
    );
  });

  app.get("/bugs/:numberOfBugs", (req, res) => {
    let { numberOfBugs } = req.params;
    if (numberOfBugs < 200) {
        res.send(`<h1>${numberOfBugs} little bugs in the code</h1><a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`
      );
    } else {
        res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`
      );
    }
  });


app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    const { name, type } = req.query;
    let searchCriteria = "";
    if (name) {
      searchCriteria = "name";
    } else if (type) {
      searchCriteria = "type";
    }

    function filterPokemon(search) {
      if (search === "name") {
        let pokeName = pokemon.filter((p) => {
          return p.name.toLowerCase() === name.toLowerCase();
        });
        return pokeName;
      } else if (search === "type") {
        let pokeType = pokemon.filter((p) => {
          return p.type
            .map((pokemonType) => pokemonType.toLowerCase())
            .includes(type.toLowerCase());
        });
        return pokeType;
      }
    }

    res.send(filterPokemon(searchCriteria));
  });

  app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemon[indexOfArray]) {
      res.send(pokemon[indexOfArray]);
    } else {
      res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }
  });