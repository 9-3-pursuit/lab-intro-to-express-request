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

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;

  const result = pokemon.find(
    (poke) => poke.name.toUpperCase() === name.toUpperCase()
  );

  if (result) {
    res.send([result]);
  } else {
    res.send([]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;

  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/pokemon-pretty", (req, res) => {
  const pokemonHtml = pokemon
    .map(
      (poke, index) =>
        `<li><a href="/pokemon-pretty/${index}">${poke.name}</a></li>`
    )
    .join("");
  const html = `<h1>All Pokemon</h1><ul>${pokemonHtml}</ul>`;
  res.send(html);
});

// app.get("/pokemon/search", (req, res) => {
//     const { name, key } = req.query;

//     let filteredPokemon = pokemon;

//     if (name) {
//       filteredPokemon = filteredPokemon.filter(
//         (poke) => poke.name.toUpperCase() === name.toUpperCase()
//       );
//     }

//     if (key && Object.keys(pokemon[0]).includes(key)) {
//       filteredPokemon = filteredPokemon.filter(
//         (poke) => poke[key].toUpperCase() === req.query[key].toUpperCase()
//       );
//     }

//     if (filteredPokemon.length > 0) {
//       res.send(filteredPokemon);
//     } else {
//       res.send([]);
//     }
// });

app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;

  if (pokemon[indexOfArray]) {
    const { name, img, ...otherInfo } = pokemon[indexOfArray];
    const html = 
    `<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h1 style="text-align: center;">${name}</h1><img style="width: 25%;" src="${img}" alt="${name}"/>
    <ul style="text-align: center;">${Object.entries(otherInfo)
      .map(([key, value]) => `<li>${key}: ${value}</li>`)
      .join("")}
    </ul>
    </div>`;
    res.send(html);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

module.exports = app;
